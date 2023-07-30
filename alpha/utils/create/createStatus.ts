import { MarkCreateType } from "@/models/personal/Mark";

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
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default createStatus;
