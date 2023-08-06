import { GoalCreateType, GoalType } from "@/models/personal/Goal";
import { MinorGoalCreateType } from "@/models/personal/MinorGoal";

export const createGoal = async ({
  user,
  title,
  description,
  rank,
  deadline,
  why,
}: GoalCreateType) => {
  const postBody = {
    user,
    title,
    description,
    rank,
    deadline,
    why,
  };

  try {
    const response = await fetch("/api/goal", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas: GoalType = await response.json();
      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export const createMinorGoal = async ({
  user,
  title,
  description,
  deadline,
  major,
  status,
}: MinorGoalCreateType) => {
  const postBody = {
    user,
    title,
    description,
    deadline,
    major,
    status,
  };

  try {
    const response = await fetch("/api/goal", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas: GoalType = await response.json();
      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};
