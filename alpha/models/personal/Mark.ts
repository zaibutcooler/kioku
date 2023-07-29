import { Schema, model, models } from "mongoose";

export interface MarkType {
  _id: string;
  user: string;
  positive: boolean;
  title: string;
  why: string[];
  lessons?: string[];
  note?: string;
  created: Date;
}

export interface MarkCreateType {
  user: string;
  positive: boolean;
  title: string;
  why: string[];
  lessons?: string[];
  note?: string;
}

const markSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  positive: { type: Boolean, required: true },
  title: { type: String, required: true },
  why: [{ type: String, required: true }],
  lessons: [{ type: String }],
  note: { type: String },
  created: { type: Date, default: Date.now },
});

const Mark = models.Mark || model("Mark", markSchema);

export default Mark;
