import { Schema, model, models } from "mongoose";

export interface GoalType {
  _id: string;
  user: string;
  title: string;
  description: string;
  rank: string;
  deadline: Date;
  why: string[];
  finished: boolean[];
  created: Date;
}

export interface GoalCreateType {
  user: string;
  title: string;
  description: string;
  rank: string;
  deadline: Date;
  why: string[];
  finished?: boolean[];
}

const goalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  rank: { type: String },
  deadline: { type: Date },
  why: { type: [String] },

  finished: [{ type: Boolean, default: false }],
  created: { type: Date, default: Date.now },
});

const Goal = models.Goal || model("Goal", goalSchema);

export default Goal;
