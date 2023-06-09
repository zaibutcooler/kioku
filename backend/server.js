const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const uri = process.env.LOCAL_URI;
const atlas_uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const goalRoutes = require("./routes/goalRoutes");
app.use("/goals", goalRoutes);

const timeTableRoutes = require("./routes/timeTableRoutes");
app.use("/timetable", timeTableRoutes);

const todolistRoutes = require("./routes/todolistRoutes");
app.use("/todolist", todolistRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Listening without error at port 5000");
});
