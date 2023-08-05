"use client";
import React, { useState } from "react";
import StatusForm from "./StatusForm";
import { MarkCreateType, MarkType } from "@/models/personal/Mark";
import createStatus from "@/utils/create/createStatus";

interface Props {
  marks: MarkType[];
  handleNewItem: (input: MarkType) => void;
}

const StatusContent: React.FC<Props> = ({ handleNewItem }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async ({
    title,
    why,
    lessons,
    note,
    positive,
    user,
  }: MarkCreateType) => {
    const newItem = await createStatus({
      title,
      why,
      lessons,
      note,
      positive,
      user,
    });
    if (newItem) {
      handleNewItem(newItem);
    }
  };

  return (
    <div className="w-full h-full ">
      <section className="w-full border py-5 px-8 rounded-md ">
        <h1 className="font-bold text-base mb-4">Status Form</h1>
        {showForm ? (
          <StatusForm
            handleBack={() => setShowForm(false)}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div>
            <p className="text-xs text-gray-500 mb-2 font-semibold leading-6">
              Make a point where you accomplished something or failed something.
              Later you can see your failures and accomplishments.
            </p>
            <div className="flex justify-end">
              <button
                className="px-2 py-1.5 rounded-sm bg-black text-white text-xs"
                onClick={() => setShowForm(true)}>
                Add an event
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default StatusContent;
