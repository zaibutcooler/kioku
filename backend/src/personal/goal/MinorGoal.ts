import mongoose, { Schema } from "mongoose";
import { MinorGoalType } from "../../types";

const minorGoalSchema = new Schema<MinorGoalType>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  deadline: { type: String },
  why: { type: String },
  created: { type: Date, default: Date.now },
});

const MinorGoal = mongoose.model("MinorGoal", minorGoalSchema);

export default MinorGoal;
