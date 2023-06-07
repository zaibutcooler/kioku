import React from "react";

const TaskCard = ({ task, handleDelete, handleFinish }) => {
  return (
    <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <div className="flex items-center mt-4">
        <button
          className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-700"
          onClick={handleDelete}>
          Delete
        </button>
        <button
          className="mx-4 py-2 px-4 bg-white border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white hover:border-transparent"
          onClick={handleFinish}>
          Finish
        </button>
        <span className="text-gray-500 ml-auto">{task.dueDate}</span>
      </div>
    </div>
  );
};

export default TaskCard;
