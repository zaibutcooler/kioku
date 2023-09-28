import { DiaryCreateType, DiaryType } from "@/models/personal/Diary";

const createDiary = async ({ user, title, body }: DiaryCreateType) => {
  const postBody = {
    user,
    title,
    body,
  };

  try {
    const response = await fetch("/api/diary", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas: DiaryType = await response.json();
      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default createDiary;
