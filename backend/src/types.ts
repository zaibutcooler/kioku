import { Types } from "mongoose";

export interface UserType {
  username: string;
  password: string;
  email: string;
  created: Date;
}

export interface TaskType {
  user: Types.ObjectId | UserType;
  created: Date;
}

export interface DiaryType {
  user: Types.ObjectId | UserType;
  title: string;
  body: string;
  //photo
  created: Date;
}

export interface GoalType {
  user: Types.ObjectId | UserType;
  title: string;
  description: string;
  deadline: string;
  why: string;
  created: Date;
}

export interface TimerType {
  user: Types.ObjectId | UserType;
  created: Date;
}

export interface TrackerType {
  user: Types.ObjectId | UserType;
  item: Types.ObjectId | TrackScaffoldType;
  countType: string;
  count: number;
  note: string;
  created: Date;
}

export interface TrackScaffoldType {
  user: Types.ObjectId | UserType;
  name: string;
  countType: string; //min,count, etc etc
  count: number; // amount
  everyday: boolean;
  repeat: string | string[]; // daily, every sunday or etc
  type: string; //job, learning ,studying, mindfullness
  hide: boolean; // hide after done
  created: Date;
}
