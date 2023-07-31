import { NoteType } from "@/models/personal/Note";

const fetchNotes = async (userID: string) => {
  try {
    const response = await fetch(`/api/note?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: NoteType[] = datas.slice().reverse();
      return result;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default fetchNotes;
