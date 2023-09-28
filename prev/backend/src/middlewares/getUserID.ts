import { Request } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = String(process.env.SECRET_KEY);

interface DecodedToken {
  userID: string;
}

const getUserID = (req: Request) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return undefined;
    }

    const decoded = jwt.verify(token, secretKey) as DecodedToken;
    return decoded.userID;
  } catch (err) {
    console.log("Get user Error");
  }
};

export default getUserID;
