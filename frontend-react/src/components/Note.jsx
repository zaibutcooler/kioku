import React, { useState, useEffect } from "react";
import NoteForm from "../mini-com/NoteForm";
import NoteCard from "../mini-com/NoteCard";
import axios from "axios";
import NoteDetailCard from "../mini-com/NoteDetailCard";

const Note = () => {
  const url = "http://localhost:5000/goals/notes";

  const [toggleDetail, setToggleDetail] = useState(true);
  const [datas, setDatas] = useState([]);
  const [detailId, setDetailId] = useState("");

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

  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log("Deleted Successfully");
        setDatas(datas.filter((data) => data._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const renderAllCards = () => {
    return (
      <div className="md:w-3/5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {datas.map((entry) => (
            <div
              key={entry._id}
              onClick={() => {
                setToggleDetail(false);
                setDetailId(entry._id);
              }}>
              <NoteCard entry={entry} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDetailCard = () => {
    const detailData = datas.find((item) => item._id === detailId);
    console.log(detailData);

    return (
      <div className="md:w-3/5 p-4">
        <div className="mb-4">
          {detailData && (
            <NoteDetailCard
              note={detailData}
              handleBack={() => {
                setToggleDetail(true);
              }}
              handleDelete={() => {
                handleDelete(detailData._id);
                setToggleDetail(!toggleDetail);
              }}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-4">
        <NoteForm handleSubmit={handleSubmit} />
      </div>
      {toggleDetail ? renderAllCards() : renderDetailCard()}
    </div>
  );
};

export default Note;
