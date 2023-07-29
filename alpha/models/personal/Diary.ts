import { Schema, model, models } from "mongoose";

export interface DiaryType {
  _id: string;
  user: string;
  title: string;
  body: string;
  created: Date;
}

export interface DiaryCreateType {
  user: string;
  title: string;
  body: string;
}

const diarySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const Diary = models.Diary || model<DiaryType>("Diary", diarySchema);

export default Diary;
