import mongoose, { Schema } from "mongoose";
import { TrackerType } from "../../types";

const trackerSchema = new Schema<TrackerType>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  item: { type: Schema.Types.ObjectId, ref: "TrackScaffold" },
  countType: { type: String },
  count: { type: Number },
  note: { type: String },
  created: { type: Date, default: Date.now },
});

const Auth = mongoose.model("Auth", trackerSchema);

export default Auth;
