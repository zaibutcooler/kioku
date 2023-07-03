export interface UserType {
  username: string;
  password: string;
  email: string;
  created: Date;
}

export interface TaskType {
  user: string;
  created: Date;
}

export interface DiaryType {
  user: string;
  title: string;
  body: string;
  created: Date;
}

export interface GoalType {
  user: string;
  title: string;
  description: string;
  deadline: string;
  why: string;
  created: Date;
}

export interface TimerType {
  user: string;
  created: Date;
}

export interface TrackerType {
  user: string;
  created: Date;
}
