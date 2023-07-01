import express from "express";
import connectDB from "./db";
const app = express();
app.use(express.json());

app.listen(5000, () => {
  connectDB();
  console.log("Listening at port 5000");
});
