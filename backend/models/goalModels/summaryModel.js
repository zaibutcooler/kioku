const mongoose = require("mongoose");

const summarySchema = mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  body: { type: String },
  item: { type: String, enum: ["books", "course", "meeting", "article"] },
  created: { type: Date, default: Date.now },
});

const Summary = mongoose.model("Summary", summarySchema);

module.exports = Summary;
