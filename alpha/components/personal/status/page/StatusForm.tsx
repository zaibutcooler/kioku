import { MarkCreateType } from "@/models/personal/Mark";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

interface Props {
  handleBack: () => void;
  handleSubmit: (input: MarkCreateType) => void;
}

const StatusForm: React.FC<Props> = ({ handleBack, handleSubmit }) => {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [why, setWhy] = useState<string[]>([""]);
  const [lessons, setLessons] = useState<string[]>([""]);
  const [positive, setPositive] = useState(false);
  const [note, setNote] = useState("");

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (session?.user) {
      console.log({
        user: session.user._id,
        title,
        why,
        lessons,
        positive,
        note,
      });
      handleSubmit({
        user: session.user._id,
        title,
        why,
        lessons,
        positive,
        note,
      });
    }
  };

  return (
    <form onSubmit={handleSubmitClick}>
      <div>
        <section className="">
          <div className="text-xs text-black mb-4">
            <div className="mb-3 text-sx font-semibold">Title</div>
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
          <div className="text-xs  mb-4">
            <div className="mb-3 text-sx font-semibold">The Reasons</div>
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

          <div className="text-xs  mb-4">
            <div className="mb-3 text-sx font-semibold">Impacts</div>
            <div className="flex gap-4 items-center">
              <button
                type="button"
                className={`px-3 py-1.5 border rounded-md ${
                  positive ? "bg-gray-300" : ""
                }`}
                onClick={() => setPositive(true)}>
                Postive
              </button>
              <button
                type="button"
                onClick={() => setPositive(false)}
                className={`px-3 py-1.5 border rounded-md  ${
                  positive ? "" : "bg-gray-300"
                }`}>
                Negative
              </button>
            </div>
          </div>

          <div className="text-xs  mb-4">
            <div className="mb-3 text-sx font-semibold">Lessons Learnt</div>
            {lessons.map((item, index) => (
              <div className="mb-2" key={index}>
                <input
                  type="text"
                  id="title"
                  value={item}
                  onChange={(e) => {
                    const val = lessons;
                    val[index] = e.target.value;
                    setLessons([...val]);
                  }}
                  name="title"
                  className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                  placeholder="e.g. Frontend Developer"
                />
              </div>
            ))}
            <div className="flex justify-end text-xs">
              {lessons.length > 1 && (
                <button
                  className="px-2 py-1.5 hover:bg-gray-50 border border-gray-200 mr-3"
                  onClick={() => {
                    const updatedItem = [...lessons];
                    updatedItem.splice(lessons.length - 1, 1);
                    setLessons(updatedItem);
                  }}
                  type="button">
                  - Remove
                </button>
              )}

              <button
                className="px-2 py-1.5 hover:bg-gray-50 border border-gray-200"
                onClick={() => setLessons([...lessons, ""])}
                type="button">
                + Add More
              </button>
            </div>
          </div>

          <div className="text-xs  mb-4">
            <div className="mb-3 text-sx font-semibold">Note</div>
            <textarea
              id="title"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              name="title"
              className="form-input w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
              placeholder="e.g. Frontend Developer"
            />
          </div>
        </section>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-2 py-1.5 text-black font-semibold text-xs"
            onClick={handleBack}>
            Back
          </button>
          <button
            type="submit"
            className="px-2 py-1.5 rounded-sm bg-black text-white text-xs">
            Finish
          </button>
        </div>
      </div>
    </form>
  );
};

export default StatusForm;
