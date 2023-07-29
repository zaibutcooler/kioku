import { Schema, model, models } from "mongoose";

export interface TrackType {
  _id: string;
  user: string;
  item: string;
  countType: string;
  count: number;
  note?: string;
  created: Date;
}

export interface TrackCreateType {
  user: string;
  item: string;
  countType: string;
  count: number;
  note?: string;
}
