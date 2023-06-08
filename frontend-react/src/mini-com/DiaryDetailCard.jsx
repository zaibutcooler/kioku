import React from "react";
import BackButton from "./BackButton";

const DiaryDetailCard = ({ diary, formatDate, handleBack }) => {
  const bodyLines = diary.body.split("\n");

  return (
    <div className="flex justify-center">
      <div className="w-4/5 bg-white shadow-md rounded-lg p-10">
        <button
          className="mb-4 text-lg font-semibold hover:text-gray-500"
          onClick={handleBack}>
          Back
        </button>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 font-Lato">
          {diary.title}
        </h2>
        {diary.body && (
          <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap font-Monaco">
            {bodyLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </pre>
        )}
        <p className="text-sm text-gray-500 mt-4">
          {formatDate(diary.created)}
        </p>
      </div>
    </div>
  );
};

export default DiaryDetailCard;
