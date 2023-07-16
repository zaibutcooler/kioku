import mongoose, { Schema } from "mongoose";
import { UserType } from "../types";

const authSchema = new Schema<UserType>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const Auth = mongoose.model("User", authSchema);

export default Auth;
