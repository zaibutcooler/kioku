import React, { useState } from "react";

const SummaryForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [item, setItem] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit({ title, note, item });
    console.log("Submitted successfully");
    setTitle("");
    setNote("");
    setItem("");
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
          <select
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
            <option value="">Select Topic</option>
            <option value="books">Books</option>
            <option value="course">Course</option>
            <option value="meeting">Meeting</option>
            <option value="article">Article</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Body"></textarea>
        </div>
      </form>
    </div>
  );
};

export default SummaryForm;
