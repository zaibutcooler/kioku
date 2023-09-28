import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import Auth from "./User";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
const secretKey = String(process.env.SECRET_KEY);

const router = express.Router();
router.use(express.json());

router.post("/login/email", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const existUser = await Auth.findOne({ email });
    if (!existUser) {
      return res.status(404).json({ message: "Invalid Email" });
    }
    const validPassword = await bcrypt.compare(password, existUser.password);
    if (!validPassword) {
      return res.status(404).json({ message: "Invalid Password" });
    }
    const token = jwt.sign({ userID: existUser._id }, secretKey, {
      expiresIn: "7d",
    });
    const username = existUser.username;
    const userID = existUser._id;
    res.status(200).json({ token, username, userID });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error =>", err });
  }
});

router.post("/login/username", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const existUser = await Auth.findOne({ username });
    if (!existUser) {
      return res.status(404).json({ message: "Invalid Username" });
    }
    const validPassword = await bcrypt.compare(password, existUser.password);
    if (!validPassword) {
      return res.status(404).json({ message: "Invalid Password" });
    }
    const token = jwt.sign({ userID: existUser._id }, secretKey, {
      expiresIn: "7d",
    });
    const userID = existUser._id;
    res.status(200).json({ token, username, userID });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error =>", err });
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const userExist = await Auth.findOne({ username });
    const emailExist = await Auth.findOne({ email });
    if (userExist) {
      return res.status(404).json({ message: "Username already exists" });
    }
    if (emailExist) {
      return res.status(404).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Auth({ username, email, password: hashedPassword });
    newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error =>", err });
  }
});

export default router;
