const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  completed: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", todoSchema);
