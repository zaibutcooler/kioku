import React, { useState } from "react";

const FailureForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [why, setWhy] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit({ title, why, keyword });
    console.log("Submitted successfully");
    setTitle("");
    setWhy("");
  };

  return (
    <div className="w-full px-8 py-8 bg-slate-800 rounded-lg shadow-md">
      <form className="flex flex-col">
        <button
          type="submit"
          onClick={handleSubmitClick}
          className="w-1/4 py-2 px-4 mb-4 bg-white border border-white text-black font-semibold rounded-md hover:bg-black hover:text-white hover:border-transparent">
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
            id="why"
            value={why}
            onChange={(e) => {
              setWhy(e.target.value);
            }}
            className="w-full h-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Why you failed???"></textarea>
        </div>
      </form>
    </div>
  );
};

export default FailureForm;
