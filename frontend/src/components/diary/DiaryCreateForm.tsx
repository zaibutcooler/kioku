import React, { useState } from "react";

interface FormProps {
  handleSubmit: () => void;
}

const DiaryCreateForm: React.FC<FormProps> = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !body) {
      console.log("Fields cannot be empty");
      return;
    }

    handleSubmit();
  };

  return (
    <div className="w-full px-8 py-8 bg-white rounded-md shadow-md">
      <form className="flex flex-col">
        <button
          type="submit"
          onClick={handleSubmitClick}
          className="w-1/6 py-2 px-4 mb-4 bg-black border border-black text-white font-semibold rounded-xl hover:bg-gray-700 hover:text-white hover:border-transparent">
          Write
        </button>
        <div className="mb-4">
          <input
            type="text"
            id="diaryTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Diary Title"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            id="diaryEntry"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            className="w-full h-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Write your diary body here"
            required></textarea>
        </div>
      </form>
    </div>
  );
};

export default DiaryCreateForm;
