const mongoose = require("mongoose");

const diarySchema = mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  body: { type: String },
  created: { type: Date, default: Date.now },
});

const Diary = mongoose.model("Diary", diarySchema);
module.exports = Diary;
