import { GoalType } from "@/models/personal/Goal";

export const updateGoal = async (
  id: string,
  { status }: { status: string }
) => {
  const postBody = {
    status,
  };

  try {
    const response = await fetch(`/api/goal?id=${id}`, {
      method: "PATCH",
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
