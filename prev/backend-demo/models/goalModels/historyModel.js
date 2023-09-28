const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  win: { type: Boolean },
  why: { type: String },
  created: { type: Date, default: Date.now },
});

const History = mongoose.model("History", historySchema); // Update model name to "History"

module.exports = History;
