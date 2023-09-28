import { Response } from "express";
import { MyRequest } from "../../types";
import Model from "./Tracker";
import User from "../../auth/User";

const getAll = async (req: MyRequest, res: Response) => {
  try {
    const userId = req.userID;
    const items = await Model.find({ user: userId });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getOne = async (req: MyRequest, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createOne = async (req: MyRequest, res: Response) => {
  try {
    const { user, item, countType, count, note } = req.body;

    //check user exists
    const userExists = await User.findById(user);
    if (!userExists) {
      return res.status(401).json({ message: "Invalid User" });
    }

    const newItem = new Model({ user, item, countType, count, note });
    await newItem.save();
    res.status(200).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateOne = async (req: MyRequest, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteOne = async (req: MyRequest, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
