import React, { useState } from "react";

const GoalForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [deadline, setDeadline] = useState("");
  const [risks, setRisks] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit({ title, note, deadline, risks });
    console.log("Submitted successfully");
    setTitle("");
    setNote("");
    setDeadline("");
    setRisks("");
  };

  return (
    <div className="flex">
      <div className="max-w-md w-full px-8 py-8 border border-gray-200 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-black font-semibold mb-4">Add Goal</h2>
        <form className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="goalTitle"
              className="text-black font-medium block mb-2">
              Goal Title
            </label>
            <input
              type="text"
              id="goalTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter goal title"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="goalDeadline"
              className="text-black font-medium block mb-2">
              Deadline
            </label>
            <input
              type="date"
              id="goalDeadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Select deadline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="goalNote"
              className="text-black font-medium block mb-2">
              Note
            </label>
            <textarea
              id="goalNote"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter goal note"></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="goalRisks"
              className="text-black font-medium block mb-2">
              Risks
            </label>
            <input
              type="text"
              id="goalRisks"
              value={risks}
              onChange={(e) => setRisks(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter risks"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmitClick}
            className="w-1/2 mx-auto py-2 px-4 bg-white border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white hover:border-transparent">
            Add Goal
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoalForm;
