import mongoose, { Schema } from "mongoose";
import { UserType } from "../types";

const userSchema = new Schema<UserType>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
