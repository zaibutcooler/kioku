import { Request, Response } from "express";
import Model from "./Diary";
import getUserID from "../../middlewares/getUserID";

export const getAll = async (req: Request, res: Response) => {
  try {
    const user = getUserID(req);
    if (!user) {
      return res.status(401).json({ message: "Get User ID error" });
    }

    const items = await Model.find({ user: user });

    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const user = getUserID(req);
    if (!user) {
      return res.status(401).json({ message: "Get User ID error" });
    }

    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (user != String(item?.user)) {
      return res
        .status(404)
        .json({ message: "Only the user can get this item." });
    }

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

export const createOne = async (req: Request, res: Response) => {
  try {
    const user = getUserID(req);
    if (!user) {
      return res.status(401).json({ message: "Get User ID error" });
    }

    const { title, body } = req.body;
    const newItem = new Model({ user, title, body });
    await newItem.save();
    res.status(200).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

export const updateOne = async (req: Request, res: Response) => {
  try {
    const user = getUserID(req);
    if (!user) {
      return res.status(401).json({ message: "Get User ID error" });
    }

    const { title, body } = req.body;
    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (user != String(item?.user)) {
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

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const user = getUserID(req);
    if (!user) {
      return res.status(401).json({ message: "Get User ID error" });
    }

    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (user != String(item?.user)) {
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
