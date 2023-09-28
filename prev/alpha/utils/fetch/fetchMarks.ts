import { MarkType } from "@/models/personal/Mark";

const fetchMarks = async (userID: string) => {
  try {
    const response = await fetch(`/api/mark?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: MarkType[] = datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default fetchMarks;
