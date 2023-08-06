import { GoalType } from "@/models/personal/Goal";
import { MinorGoalType } from "@/models/personal/MinorGoal";
import { getDaysLeft } from "@/utils";
import { fetchMiniGoals } from "@/utils/fetch/fetchGoals";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { IoArrowDownCircle } from "react-icons/io5";

interface Props {
  goals: GoalType[];
}

const GoalContents: React.FC<Props> = ({ goals }) => {
  const { data: session } = useSession();
  const [opened, setOpened] = useState("");
  const [minorGoals, setMinorGoals] = useState<MinorGoalType[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const minorGoalDatas = await fetchMiniGoals(session.user._id);
        minorGoalDatas && setMinorGoals(minorGoalDatas);
      }
    };
    fillDatas();
  }, []);

  return (
    <div className="w-full h-full px-3">
      {goals &&
        goals.map((item) => (
          <main key={item._id} className="mb-4">
            <section className="border p-4 rounded-md mb-2">
              <div className="w-full flex items-center justify-between text-sm mb-3">
                <h1 className="font-semibold text-black">{item.title} </h1>

                <div className="py-1 px-2 rounded-full border text-[0.6rem] min-w-[70px] font-semibold">
                  {getDaysLeft(String(item.deadline))} days
                </div>
              </div>
              <div className="text-gray-600 text-xs mb-4">
                {item.description}
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="px-2 py-1.5 rounded-md text-xs text-black font-semibold"
                  onClick={() => setOpened(item._id)}>
                  Add Mini Goals
                </button>

                <button className="px-2 py-1.5 w-16 rounded-md bg-black text-xs text-white">
                  Finish
                </button>
              </div>
            </section>
            {opened === item._id && (
              <section className="w-full mt-4 text-xs border border-gray-200 rounded-md p-4">
                <h1 className="mb-3 font-semibold text-black">
                  Add Mini Goals
                </h1>
                <div className="flex gap-4 mb-2">
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    className="form-input w-2/3 px-2 py-1.5 rounded-md border"
                    placeholder="Title"
                  />
                  <input
                    type="date"
                    id="deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    name="deadline"
                    className="form-input w-1/3 px-2 py-1.5 rounded-md border"
                    placeholder="Title"
                  />
                </div>
                <textarea
                  id="title"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  name="title"
                  className="form-input mb-4 w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                  placeholder="e.g. Frontend Developer"
                />
                <div className="flex gap-4 justify-end">
                  <button
                    className="px-2 py-1.5 text-xs font-semibold"
                    onClick={() => setOpened("")}>
                    Back
                  </button>
                  <button className="px-2 py-1.5 w-14 rounded-md bg-black text-xs text-white">
                    Add
                  </button>
                </div>
              </section>
            )}
          </main>
        ))}
    </div>
  );
};

export default GoalContents;
