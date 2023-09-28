import { NoteFolderType } from "@/models/personal/NoteFolder";

const fetchNoteFolders = async (userID: string) => {
  try {
    const response = await fetch(`/api/note/folder?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: NoteFolderType[] = datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default fetchNoteFolders;
