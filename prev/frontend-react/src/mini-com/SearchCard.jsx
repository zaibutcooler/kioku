import React, { useState } from "react";

const SearchCard = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-500"
          placeholder="Search by title or date"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white font-semibold rounded-r-md hover:bg-gray-700">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchCard;
