import { Schema, model, models } from "mongoose";

export interface UserType {
  _id: string;
  username: string;
  email: string;
  password: string;
  created: string | Date;
}

export interface UserCreateType {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const User = models.User || model("User", userSchema);

export default User;
