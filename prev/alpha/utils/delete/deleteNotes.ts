import { NoteType } from "@/models/personal/Note";

const deleteNote = async (id: string) => {
  try {
    const response = await fetch(`/api/note?id=${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      const result: NoteType = data;
      return result;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default deleteNote;
