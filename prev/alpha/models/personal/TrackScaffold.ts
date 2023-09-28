import { Schema, model, models } from "mongoose";

export interface TrackScaffoldType {
  _id: string;
  user: string;
  name: string;
  countType: string;
  count: number;
  goal: string;
  everyday: boolean;
  repeat: string[];
  type: string;
  hide: boolean;
  created: Date;
}

export interface TrackScaffoldCreateType {
  user: string;
  name: string;
  countType: string;
  count: number;
  goal: string;
  everyday: boolean;
  repeat: string[];
  type: string;
}

const trackScaffoldSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  //required
  name: { type: String },
  countType: { type: String },
  count: { type: Number },
  goal: { type: String },
  everyday: { type: Boolean },
  repeat: { type: [String] },
  type: { type: String },
  // default
  hide: { type: Boolean, default: false },
  created: { type: Date, default: Date.now() },
});

const TrackScaffold =
  models.TrackScaffold || model("TrackScaffold", trackScaffoldSchema);

export default TrackScaffold;
