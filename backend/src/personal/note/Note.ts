import mongoose, { Schema, Types } from "mongoose";
import { UserType, NoteType } from "../../types";

const noteSchema = new Schema<NoteType>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  folder: { type: Schema.Types.ObjectId, ref: "NoteFolder", required: true },
  related: [{ type: String }],
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
