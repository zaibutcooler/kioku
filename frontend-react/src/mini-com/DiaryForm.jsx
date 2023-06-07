import React, { useState } from "react";

const DiaryForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit({ title, entry });
    console.log("Submitted successfully");
    setTitle("");
    setEntry("");
  };

  return (
    <div className="w-full px-8 py-8 bg-white rounded-lg shadow-md">
      <form className="flex flex-col">
        <button
          type="submit"
          onClick={handleSubmitClick}
          className="w-1/6 py-2 px-4 mb-4 bg-black border border-black text-white font-semibold rounded-3xl hover:bg-gray-700 hover:text-white hover:border-transparent">
          Write
        </button>
        <div className="mb-4">
          <input
            type="text"
            id="diaryTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Diary Title"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="diaryEntry"
            value={entry}
            onChange={(e) => {
              setEntry(e.target.value);
            }}
            className="w-full h-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Write your diary entry here"></textarea>
        </div>
      </form>
    </div>
  );
};

export default DiaryForm;
