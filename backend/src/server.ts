import express from "express";
import connectDB from "./db";
import cors from "cors";
import authRoutes from "./auth";
import diaryRoutes from "./personal/diary/index";

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use("/diaries/", diaryRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Listening at port 5000");
});
