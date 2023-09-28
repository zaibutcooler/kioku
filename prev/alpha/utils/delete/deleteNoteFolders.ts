const deleteNoteFolder = async (id: string) => {
  try {
    const response = await fetch(`/api/note/folder?id=${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      console.log("okay");
      return data;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default deleteNoteFolder;

//http://localhost:3000/api/note/folder?id=64c16d804043c533448db52e
