import React from "react";

const SummaryDetailCard = ({
  summary,
  handleEdit,
  handleDelete,
  handleBack,
}) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
      <button
        className="mb-6 text-black text-lg font-semibold hover:text-gray-700"
        onClick={handleBack}>
        Back
      </button>
      <h3 className="text-2xl font-semibold mb-6">{summary.title}</h3>

      <p className="text-gray-900">{summary.body}</p>
      <p className="text-gray-400 mt-2 mb-4">Topic :{summary.item}</p>
      <hr></hr>
      <div className="flex items-center mt-4">
        <button
          className="px-4 py-2 bg-black border border-black text-white font-semibold rounded-md hover:bg-gray-200 hover:text-black mr-2"
          onClick={() => {}}>
          Edit
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white hover:border-transparent"
          onClick={handleDelete}>
          Delete
        </button>
        <span className="text-gray-500 text-sm ml-auto">
          created-at :{formatDate(summary.created)}
        </span>
      </div>
    </div>
  );
};

export default SummaryDetailCard;
