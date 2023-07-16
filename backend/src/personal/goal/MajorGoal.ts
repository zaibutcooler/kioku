import mongoose, { Schema } from "mongoose";
import { MajorGoalType } from "../../types";

const majorGoalSchema = new Schema<MajorGoalType>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  rank: { type: String },
  deadline: { type: Date },
  why: { type: [String] },
  minor: [{ type: Schema.Types.ObjectId, ref: "MinorGoal" }],

  finished: [{ type: Boolean, default: false }],
  created: { type: Date, default: Date.now },
});

const MajorGoal = mongoose.model("MajorGoal", majorGoalSchema);

export default MajorGoal;
