import React from "react";

const AccomFailureCard = ({ item }) => {
  const { title, created, why } = item;

  return (
    <div className="w-full pt-4 px-2">
      <div className="flex flex-col bg-white rounded-lg shadow-md p-4 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-500 transition-colors duration-300 mb-2">
          {title}
        </h2>
        <p className="text-gray-800 mt-2">{why}</p>
        <p className="text-gray-500 mt-2">
          Created: {new Date(created).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default AccomFailureCard;
