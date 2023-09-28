import { Response, Request } from "express";
import Model from "./TrackScaffold";
import User from "../../auth/User";
import getUserID from "../../middlewares/getUserID";

const getAll = async (req: Request, res: Response) => {
  try {
    const userId = getUserID(req);
    const items = await Model.find({ user: userId });
    res.status(200).json(items);
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
    const user = getUserID(req);
    const { name, countType, count, everyday, repeat, type } = req.body;
    const userExists = await User.findById(user);
    if (!userExists) {
      return res.status(401).json({ message: "Invalid User" });
    }
    const newItem = new Model({
      user,
      name,
      countType,
      count,
      everyday,
      repeat,
      type,
    });
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
