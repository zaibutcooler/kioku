import { MarkCreateType, MarkType } from "@/models/personal/Mark";

const createStatus = async ({
  user,
  positive,
  title,
  why,
  lessons,
  note,
}: MarkCreateType) => {
  const postBody = {
    user,
    positive,
    title,
    why,
    lessons,
    note,
  };

  try {
    const response = await fetch("/api/mark", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas: MarkType = await response.json();
      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default createStatus;
