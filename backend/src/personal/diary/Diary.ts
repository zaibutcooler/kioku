import mongoose, { Schema, Types } from "mongoose";
import { DiaryType } from "../../types";

const diarySchema = new Schema<DiaryType>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const Diary = mongoose.model("Diary", diarySchema);
export default Diary;
