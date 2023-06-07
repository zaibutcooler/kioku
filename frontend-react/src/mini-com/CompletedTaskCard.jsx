import React, { useState } from "react";

const CompletedTaskCard = ({ task, handleDelete }) => {
  return (
    <div className="p-4 mb-4 bg-gray-200 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <div className="flex items-center mt-4">
        <button
          className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-700"
          onClick={handleDelete}>
          Hide
        </button>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
