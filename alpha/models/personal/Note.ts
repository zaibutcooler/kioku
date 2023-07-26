import { Schema, model, models } from "mongoose";

const noteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  folder: { type: Schema.Types.ObjectId, ref: "NoteFolder", required: true },
  related: [{ type: String }],
  updated: { type: Date },
  created: { type: Date, default: Date.now },
});

const Note = models.Note || model("Note", noteSchema);

export default Note;
