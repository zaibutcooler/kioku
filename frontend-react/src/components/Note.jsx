import React, { useState, useEffect } from "react";
import NoteForm from "../mini-com/NoteForm";
import NoteCard from "../mini-com/NoteCard";

const Note = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/goals/notes")
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-4">
        <NoteForm />
      </div>
      <div className="md:w-3/5 p-2">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {datas.map((entry) => (
            <NoteCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Note;
