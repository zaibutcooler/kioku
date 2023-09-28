import {
  NoteFolderCreateType,
  NoteFolderType,
} from "@/models/personal/NoteFolder";

const createNoteFolder = async ({ user, name }: NoteFolderCreateType) => {
  const postBody = {
    user,
    name,
  };
  try {
    const response = await fetch("/api/note/folder", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas: NoteFolderType = await response.json();
      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default createNoteFolder;
