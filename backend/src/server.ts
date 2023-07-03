import express from "express";
import connectDB from "./db";
import authRoutes from "./auth";

const app = express();
app.use(express.json());

app.use(authRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Listening at port 5000");
});
