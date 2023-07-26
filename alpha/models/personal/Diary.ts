import { Schema, model, models } from "mongoose";

const diarySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const Diary = models.Diary || model("Diary", diarySchema);

export default Diary;