import { Schema, model, models } from "mongoose";

export interface MinorGoalType {
  _id: string;
  user: string;
  title: string;
  description: string;
  deadline: Date;
  major: string;
  status: string;
  finished: boolean;
  created: Date;
}

export interface MinorGoalCreateType {
  user: string;
  title: string;
  description: string;
  deadline: Date;
  major: string;
}

const minorGoalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  deadline: { type: Date },
  status: { type: String, default: "default" },
  major: { type: Schema.Types.ObjectId, ref: "MajorGoal" },
  finished: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

const MinorGoal = models.MinorGoal || model("MinorGoal", minorGoalSchema);

export default MinorGoal;
