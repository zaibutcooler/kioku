import { Schema, model, models } from "mongoose";

export interface NoteType {
  _id: string;
  user: string;
  title: string;
  content: string;
  folder?: string;
  updated?: Date;
  created: Date;
}

export interface NoteCreateType {
  user: string;
  title: string;
  content: string;
  folder?: string;
}

const noteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  folder: { type: Schema.Types.ObjectId, ref: "NoteFolder" },
  updated: { type: Date },
  created: { type: Date, default: Date.now },
});

const Note = models.Note || model("Note", noteSchema);

export default Note;
