import { Schema, model, models } from "mongoose";

export interface TaskType {
  _id: string;
}

export interface TaskCreateType {
  user: string;
}

const taskSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  created: { type: Date, default: Date.now() },
});

const Task = models.Task || model("Task", taskSchema);

export default Task;
