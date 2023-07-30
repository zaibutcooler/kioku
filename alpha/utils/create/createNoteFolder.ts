import { NoteFolderCreateType } from "@/models/personal/NoteFolder";

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
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default createNoteFolder;
