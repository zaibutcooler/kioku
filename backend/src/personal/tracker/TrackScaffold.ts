import mongoose, { Schema } from "mongoose";
import { TrackScaffoldType } from "../../types";

const trackScaffoldSchema = new Schema<TrackScaffoldType>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  //required
  name: { type: String },
  countType: { type: String },
  count: { type: Number },
  everyday: { type: Boolean },
  repeat: { type: [String] },
  type: { type: String },
  // default
  hide: { type: Boolean, default: false },
  created: { type: Date, default: Date.now() },
});

const TrackScaffold = mongoose.model("TrackScaffold", trackScaffoldSchema);

export default TrackScaffold;

//   export interface TrackScaffoldType {
//     user: Types.ObjectId | UserType;
//     name: string;
//     countType: string; //min,count, etc etc
//     count: number; // amount
//     repeat: string | string[]; // daily, every sunday or etc
//     type: string; //job, learning ,studying, mindfullness
//     hide: boolean; // hide after done
//     created: Date;
//   }
