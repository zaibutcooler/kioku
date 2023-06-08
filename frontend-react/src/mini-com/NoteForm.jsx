import React, { useState } from "react";

const NoteForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit({ title, note, keyword });
    console.log("Submitted successfully");
    setTitle("");
    setNote("");
    setKeyword("");
  };

  return (
    <div className="w-full px-8 py-8 bg-white rounded-lg shadow-md">
      <form className="flex flex-col">
        <button
          type="submit"
          onClick={handleSubmitClick}
          className="w-1/4 py-2 px-4 mb-4 bg-black border border-black text-white font-semibold rounded-md hover:bg-gray-700 hover:text-white hover:border-transparent">
          Write
        </button>
        <div className="mb-4">
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="note"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            className="w-full h-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Note"></textarea>
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Keyword"
          />
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
