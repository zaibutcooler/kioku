import { Response, Request } from "express";
import Model from "./Tracker";
import User from "../../auth/User";

const getAll = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getOne = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createOne = async (req: Request, res: Response) => {
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

const updateOne = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteOne = async (req: Request, res: Response) => {
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
