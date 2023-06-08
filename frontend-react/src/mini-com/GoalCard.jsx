import React from "react";

const GoalCard = ({ goal, handleEdit, handleDelete, handleSucceed }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6">{goal.title}</h3>
      <p className="text-black text-lg mb-4">{formatDate(goal.deadline)}</p>

      <p className="text-gray-600">{goal.note}</p>
      <p className="text-gray-600 mt-2 mb-4">Risks: {goal.risks.join(", ")}</p>
      <hr></hr>
      <div className="flex items-center mt-4">
        <button
          className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-200 hover:text-black mr-2"
          onClick={handleSucceed}>
          Succeed
        </button>
        <button
          className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-200 hover:text-black mr-2"
          onClick={handleEdit}>
          Edit
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white hover:border-transparent"
          onClick={handleDelete}>
          Delete
        </button>
        <span className="text-gray-500 text-sm ml-auto">
          created-at :{formatDate(goal.created)}
        </span>
      </div>
    </div>
  );
};

export default GoalCard;
