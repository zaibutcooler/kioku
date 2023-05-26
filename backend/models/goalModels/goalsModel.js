const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  title: { type: String, required: true },
  note: { type: String },
  created: { type: Date, default: Date.now },
  isCompleted: { type: Boolean, default: false },
  deadline: { type: Date, required: true },
  risks: [{ type: String }],
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
