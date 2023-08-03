import { NoteCreateType, NoteType } from "@/models/personal/Note";

const updateNote = async (
  id: string,
  {
    title,
    content,
    related,
  }: { title: string; content: string; related: string }
) => {
  const postBody = {
    title,
    content,
    related,
  };

  try {
    const response = await fetch(`/api/note?id=${id}`, {
      method: "PATCH",
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

export default updateNote;
