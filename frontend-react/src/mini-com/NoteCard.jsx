import React from "react";

const NoteCard = ({ entry }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className="w-full p-4">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-md p-4 cursor-pointer">
        <h2 className="text-xl text-gray-800 hover:text-indigo-500 transition-colors duration-300">
          {entry.title}
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          {formatDate(entry.created)}
        </p>
      </div>
    </div>
  );
};

export default NoteCard;
