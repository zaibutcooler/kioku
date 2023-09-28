import express from "express";
import connectDB from "./db";
import cors from "cors";
import authRoutes from "./auth";
import diaryRoutes from "./personal/diary/index";
import trackerRoutes from "./personal/tracker/index";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use(authRoutes);
app.use("/diaries/", diaryRoutes);
app.use("/trackers/", trackerRoutes);

app.listen(port, () => {
  connectDB();
  console.log("Listening at port " + port);
});
