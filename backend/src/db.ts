import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const local = String(process.env.LOCAL_DB);
const atlas = String(process.env.ATLAS_DB);

const connectDB = () => {
  mongoose
    .connect(local, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("db error", error);
    });
};

export default connectDB;
