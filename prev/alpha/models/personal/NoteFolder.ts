import { Schema, model, models } from "mongoose";

export interface NoteFolderType {
  _id: string;
  user: string;
  name: string;
  created: Date;
}

export interface NoteFolderCreateType {
  user: string;
  name: string;
}

const noteFolderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const NoteFolder = models.NoteFolder || model("NoteFolder", noteFolderSchema);

export default NoteFolder;
