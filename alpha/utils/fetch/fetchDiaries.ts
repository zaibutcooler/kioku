import { DiaryType } from "@/models/personal/Diary";

const fetchDiaries = async (userID: string) => {
  try {
    const response = await fetch(`/api/diary?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: DiaryType[] = await datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default fetchDiaries;
