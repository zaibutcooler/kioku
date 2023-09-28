import { NoteCreateType, NoteType } from "@/models/personal/Note";

const createNote = async ({
  user,
  title,
  content,
  folder,
  related,
}: NoteCreateType) => {
  const postBody = {
    user,
    title,
    content,
    folder,
    related,
  };

  try {
    const response = await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas: NoteType = await response.json();
      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default createNote;
