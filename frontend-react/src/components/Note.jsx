import React, { useState } from "react";
import NoteForm from "../mini-com/NoteForm";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleNoteSubmit = (note) => {
    const newNote = {
      id: Date.now(),
      text: note,
    };
    setNotes([...notes, newNote]);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>
        <NoteForm handleNoteSubmit={handleNoteSubmit} />
        {/* <NoteToggle isEditMode={isEditMode} toggleEditMode={toggleEditMode} /> */}
        {/* <NoteList notes={notes} /> */}
      </div>
    </div>
  );
};

export default Note;
