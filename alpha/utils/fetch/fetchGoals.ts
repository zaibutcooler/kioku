import { GoalType } from "@/models/personal/Goal";
import { MinorGoalType } from "@/models/personal/MinorGoal";

export const fetchGoals = async (userID: string) => {
  try {
    const response = await fetch(`/api/goal?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: GoalType[] = datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchMiniGoals = async (userID: string) => {
  try {
    const response = await fetch(`/api/goal?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: MinorGoalType[] = datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};
