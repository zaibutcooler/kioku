import mongoose, { Schema, Types } from "mongoose";
import { NoteFolderType } from "../../types";

const noteFolderSchema = new Schema<NoteFolderType>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const NoteFolder = mongoose.model("NoteFolder", noteFolderSchema);

export default NoteFolder;
