import { Schema, model, models } from "mongoose";

const goalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  rank: { type: String },
  deadline: { type: Date },
  why: { type: [String] },
  // minor: [{ type: Schema.Types.ObjectId, ref: "MinorGoal" }],

  finished: [{ type: Boolean, default: false }],
  created: { type: Date, default: Date.now },
});

const Goal = models.Goal || model("Goal", goalSchema);

export default Goal;
