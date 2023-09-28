import { Response, NextFunction } from "express";
import { MyRequest } from "../types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = String(process.env.SECRET_KEY);

interface DecodedToken {
  userID: string;
}

const protectRoutes = (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Token not provided." });
    }

    const decoded = jwt.verify(token, secretKey) as DecodedToken;
    req.userID = decoded.userID;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid token." });
  }
};

export default protectRoutes;
