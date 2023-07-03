import { Response, Request } from "express";
import Model from "./Diary";
import Auth from "../../auth/Auth";

export const getAll = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createOne = async (req: Request, res: Response) => {
  try {
    const { user, title, body } = req.body;
    const userExists = await Auth.findById(user);
    if (!userExists) {
      return res.status(401).json({ message: "Invalid User" });
    }
    const newItem = new Model({ user, title, body });
    await newItem.save();
    res.status(200).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateOne = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
