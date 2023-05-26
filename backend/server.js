const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/todolist";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const goalRoutes = require("./routes/goalRoutes");
app.use("goals/", goalRoutes);

const timeTableRoutes = require("./routes/timeTableRoutes");
app.use("timetable/", timeTableRoutes);

const todolistRoutes = require("./routes/todolistRoutes");
app.use("todolist/", todolistRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("auth/", authRoutes);

app.listen(5000, () => {
  console.log("Listening without error at port 5000");
});
