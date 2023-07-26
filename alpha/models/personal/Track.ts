import { Schema, model, models } from "mongoose";

const trackSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  item: { type: Schema.Types.ObjectId, ref: "TrackScaffold" },
  countType: { type: String },
  count: { type: Number },
  note: { type: String },
  created: { type: Date, default: Date.now },
});

const Track = models.Track || model("Track", trackSchema);

export default Track;
