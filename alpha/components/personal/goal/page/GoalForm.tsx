import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/solid"; // Import ChevronDownIcon from Heroicons
import { createGoal } from "@/utils/create/createGoal";
import { GoalType } from "@/models/personal/Goal";
import { set } from "mongoose";

interface Props {
  handleNewGoal: (input: GoalType) => void;
}

const rankOptions = ["Low", "Medium", "High"]; // Add your rank options here

const GoalForm: React.FC<Props> = ({ handleNewGoal }) => {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [why, setWhy] = useState<string[]>([""]);
  const [description, setDescription] = useState("");
  const [rank, setRank] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isRankDropdownOpen, setIsRankDropdownOpen] = useState(false);

  const handleSubmitClick = async (event: React.FormEvent) => {
    event.preventDefault();
    if (session?.user) {
      let dateDeadline = new Date(deadline);
      const newItem = await createGoal({
        user: session.user._id,
        title,
        why,
        description,
        rank,
        deadline: dateDeadline,
      });
      if (newItem) {
        handleNewGoal(newItem);
        setTitle("");
        setWhy([""]);
        setDescription("");
        setRank("");
        setDeadline("");
      }
    }
  };

  const handleRankChange = (selectedRank: string) => {
    setRank(selectedRank);
  };

  return (
    <form
      onSubmit={handleSubmitClick}
      className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-white">
      <div className="border rounded-md p-6 min-h-full">
        <section className="">
          <div className="text-xs text-black mb-3">
            <div className="mb-2 text-xs font-medium text-gray-800">Title</div>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
              placeholder="e.g. Frontend Developer"
            />
          </div>
          <div className="text-xs  mb-3">
            <div className="mb-2 text-xs font-medium text-gray-800">
              The Reasons
            </div>
            {why.map((item, index) => (
              <div className="mb-2" key={index}>
                <input
                  type="text"
                  id="title"
                  value={item}
                  onChange={(e) => {
                    const val = why;
                    val[index] = e.target.value;
                    setWhy([...val]);
                  }}
                  name="title"
                  className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                  placeholder="e.g. Frontend Developer"
                />
              </div>
            ))}
            <div className="flex justify-end text-xs">
              {why.length > 1 && (
                <button
                  className="px-2 py-1.5 hover:bg-gray-50 border border-gray-200 mr-3"
                  onClick={() => {
                    const updatedItem = [...why];
                    updatedItem.splice(why.length - 1, 1);
                    setWhy(updatedItem);
                  }}
                  type="button">
                  - Remove
                </button>
              )}

              <button
                className="px-2 py-1.5 hover:bg-gray-50 border border-gray-200"
                onClick={() => setWhy([...why, ""])}
                type="button">
                + Add More
              </button>
            </div>
          </div>

          <div className="text-xs text-black mb-3">
            <div className="mb-2 text-xs font-medium text-gray-800">Rank</div>
            <div className="relative">
              <button
                type="button"
                className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-gray-400 focus:border-gray-400 flex items-center justify-between"
                onClick={() => setIsRankDropdownOpen((prev) => !prev)}>
                {rank ? rank : "Select priority"}
                <ChevronDownIcon
                  className={`w-4 h-4 text-gray-400 ${
                    isRankDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isRankDropdownOpen && (
                <ul
                  onMouseLeave={() => setIsRankDropdownOpen(false)}
                  className="absolute z-10 w-full py-1 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  {rankOptions.map((option) => (
                    <li
                      key={option}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                        option === rank ? "bg-gray-200" : ""
                      }`}
                      onClick={() => {
                        handleRankChange(option);
                        setIsRankDropdownOpen(false);
                      }}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="text-xs text-black mb-3">
            <div className="mb-2 text-xs font-medium text-gray-800">
              Deadline
            </div>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              name="deadline"
              className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
              placeholder="e.g. Frontend Developer"
            />
          </div>

          <div className="text-xs  mb-3">
            <div className="mb-2 text-xs font-medium text-gray-800">Note</div>
            <textarea
              id="title"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              name="title"
              className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
              placeholder="e.g. Frontend Developer"
            />
          </div>
        </section>
        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="px-4 py-1.5 rounded-sm bg-black text-white text-xs">
            Finish
          </button>
        </div>
      </div>
    </form>
  );
};

export default GoalForm;
