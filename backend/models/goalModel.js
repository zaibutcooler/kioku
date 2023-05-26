const mongoose = require("mongoose");

// const diarySchema = mongoose.Schema({
//   title: { type: String },
//   body: { type: String },
//   created: { type: Date, default: Date.now },
// });

// const Diary = mongoose.model("Diary", diarySchema);

const summarySchema = mongoose.Schema({
  title: { type: String },
  body: { type: String },
  item: { type: String, enum: ["books", "course", "meeting", "article"] },
  created: { type: Date, default: Date.now },
});

const Summary = mongoose.model("Summary", summarySchema); // Update model name to "Summary"

const historySchema = mongoose.Schema({
  title: { type: String },
  win: { type: Boolean },
  why: { type: String },
  created: { type: Date, default: Date.now },
});

const History = mongoose.model("History", historySchema); // Update model name to "History"

module.exports = {
  Summary,
  History,
};
