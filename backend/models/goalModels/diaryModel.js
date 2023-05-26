const mongoose = require("mongoose");

const diarySchema = mongoose.Schema({
  title: { type: String },
  body: { type: String },
  created: { type: Date, default: Date.now },
});

const Diary = mongoose.model("Diary", diarySchema);
module.exports = Diary;
