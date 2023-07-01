export interface UserType {
  username: string;
  password: string;
  email: string;
}

export interface TaskType {
  creator: string;
  created: Date;
}

export interface DiaryType {
  creator: string;
  title: string;
  body: string;
  created: Date;
}

export interface GoalType {
  creator: string;
  title: string;
  description: string;
  deadline: string;
  why: string;
  created: Date;
}

export interface TimerType {
  creator: string;
  created: Date;
}

export interface TrackerType {
  creator: string;
  created: Date;
}
