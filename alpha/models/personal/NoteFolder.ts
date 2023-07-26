import { Schema, model, models } from "mongoose";

const noteFolderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const NoteFolder = models.NoteFolder || model("NoteFolder", noteFolderSchema);

export default NoteFolder;
