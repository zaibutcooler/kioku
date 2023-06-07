import React, { useState } from "react";

const NoteForm = ({ handleNoteSubmit }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNoteSubmit(note);
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter a note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
