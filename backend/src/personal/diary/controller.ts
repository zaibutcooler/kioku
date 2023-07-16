import { Response } from "express";
import { MyRequest } from "../../types";
import Model from "./Diary";

export const getAll = async (req: MyRequest, res: Response) => {
  try {
    const user = req.userID;
    const items = await Model.find({ user: user });
    console.log(user);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

export const getOne = async (req: MyRequest, res: Response) => {
  try {
    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

export const createOne = async (req: MyRequest, res: Response) => {
  try {
    const user = req.userID;
    const { title, body } = req.body;
    //
    const newItem = new Model({ user, title, body });
    await newItem.save();
    res.status(200).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

export const updateOne = async (req: MyRequest, res: Response) => {
  try {
    const user = req.userID;
    const { title, body } = req.body;
    const item = await Model.findById(req.params.id);

    if (user !== item?.user) {
      return res
        .status(404)
        .json({ message: "Only the user can make changes" });
    }

    const newItem = await Model.findByIdAndUpdate(
      req.params.id,
      {
        title,
        body,
      },
      { new: true }
    );

    res.status(200).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

export const deleteOne = async (req: MyRequest, res: Response) => {
  try {
    const user = req.userID;
    const item = await Model.findById(req.params.id);

    if (user !== item?.user) {
      return res
        .status(404)
        .json({ message: "Only the user can make changes" });
    }

    const deletedItem = await Model.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedItem);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};
