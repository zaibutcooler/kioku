import React, { useState, useEffect } from "react";
import NoteForm from "../mini-com/NoteForm";
import NoteCard from "../mini-com/NoteCard";
import axios from "axios";

const Note = () => {
  const url = "http://localhost:5000/goals/notes";

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data.sort((a, b) => b.created.localeCompare(a.created)));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (toSend) => {
    axios
      .post(url, toSend)
      .then((res) => {
        console.log("Uploaded Data Successfully");
        const updatedData = [res.data, ...datas];
        setDatas(updatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-4">
        <NoteForm handleSubmit={handleSubmit} />
      </div>
      <div className="md:w-3/5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {datas.map((entry) => (
            <div key={entry.id}>
              <NoteCard entry={entry} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Note;
