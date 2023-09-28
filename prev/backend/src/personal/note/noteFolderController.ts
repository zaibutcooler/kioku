import { Request, Response } from "express";
import Model from "./NoteFolder";
import getUserID from "../../middlewares/getUserID";

const getAll = async (req: Request, res: Response) => {
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

const getOne = async (req: Request, res: Response) => {
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

const createOne = async (req: Request, res: Response) => {
  try {
    const user = getUserID(req);
    if (!user) {
      return res.status(401).json({ message: "Get User ID error" });
    }

    const { name } = req.body;
    const newItem = new Model({ user, name });
    await newItem.save();
    res.status(200).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

const updateOne = async (req: Request, res: Response) => {
  try {
    const user = getUserID(req);
    if (!user) {
      return res.status(401).json({ message: "Get User ID error" });
    }

    const { name } = req.body;
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
        name,
      },
      { new: true }
    );

    res.status(200).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

const deleteOne = async (req: Request, res: Response) => {
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

export default { getAll, getOne, createOne, updateOne, deleteOne };
