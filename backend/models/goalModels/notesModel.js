const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  note: { type: String },
  created: { type: Date, default: Date.now },
  keyword: { type: String },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
