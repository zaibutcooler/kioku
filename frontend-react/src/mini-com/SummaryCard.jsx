import React from "react";

const SummaryCard = ({ summary }) => {
  const { title, created, item } = summary;

  return (
    <div className="w-full p-4">
      <div className="flex flex-col bg-white rounded-lg shadow-md p-4 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-500 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-500 mt-2">
          Created: {new Date(created).toLocaleDateString()}
        </p>
        <p className="text-gray-500 mt-2">Topic: {item}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
