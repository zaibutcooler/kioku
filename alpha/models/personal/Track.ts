import { Schema, model, models } from "mongoose";

export interface TrackType {
  _id: string;
  user: string;
  item: string;
  countType: string;
  count: number;
  note?: string;
  effort: string;
  created: Date;
}

export interface TrackCreateType {
  user: string;
  item: string;
  countType: string;
  count: number;
  note?: string;
  effort: string;
}

const trackSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  item: { type: Schema.Types.ObjectId, ref: "TrackScaffold" },
  countType: { type: String },
  count: { type: Number },
  note: { type: String },
  effort: { type: String },
  created: { type: Date, default: Date.now() },
});

const Track = models.Track || model("Track", trackSchema);

export default Track;
