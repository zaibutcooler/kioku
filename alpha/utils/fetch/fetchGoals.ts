import { GoalType } from "@/models/personal/Goal";

const fetchGoals = async (userID: string) => {
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

export default fetchGoals;
