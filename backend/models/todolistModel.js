const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, requried: true },
  completed: { type: Boolean, default: false },
  completedDate: { type: Date },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", todoSchema);
