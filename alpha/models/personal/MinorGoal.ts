import { Schema, model, models } from "mongoose";

export interface MinorGoalType {
  _id: string;
  user: string;
  title: string;
  description: string;
  deadline: Date;
  why: string[];
  major: string;
  finished: boolean[];
  created: Date;
}

export interface MinorGoalCreateType {
  user: string;
  title: string;
  description: string;
  deadline: Date;
  why: string[];
  major: string;
  finished?: boolean[];
}

const minorGoalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  deadline: { type: Date },
  why: { type: [String] },
  major: { type: Schema.Types.ObjectId, ref: "MajorGoal" },
  finished: [{ type: Boolean, default: false }],
  created: { type: Date, default: Date.now },
});

const MinorGoal = models.MinorGoal || model("MinorGoal", minorGoalSchema);

export default MinorGoal;
