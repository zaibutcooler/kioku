import mongoose, { Schema, Types } from "mongoose";
import { MarkType } from "../../types";

const markSchema = new Schema<MarkType>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  positive: { type: Boolean, required: true },
  title: { type: String, required: true },
  why: [{ type: String, required: true }],
  lessons: [{ type: String }],
  note: { type: String },
  created: { type: Date, default: Date.now },
});

const Mark = mongoose.model("Mark", markSchema);

export default Mark;
