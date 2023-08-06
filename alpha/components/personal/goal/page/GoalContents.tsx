import { GoalType } from "@/models/personal/Goal";
import { MinorGoalType } from "@/models/personal/MinorGoal";
import { getDaysLeft } from "@/utils";
import { createMinorGoal } from "@/utils/create/createGoal";
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
  const [showDetail, setShowDetail] = useState("");
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

  const handleCreate = async (input: string) => {
    if (session?.user) {
      let deadlineSubmit = new Date(deadline);
      const newItem = await createMinorGoal({
        user: session.user._id,
        title,
        description,
        deadline: deadlineSubmit,
        major: input,
      });
      if (newItem) {
        setMinorGoals([newItem, ...minorGoals]);
        setOpened("");
        setTitle("");
        setDeadline("");
        setDescription("");
      }
    }
  };

  return (
    <div className="w-full h-full px-3">
      {goals &&
        goals.map((item) => (
          <main key={item._id} className="mb-4">
            <section className="border p-4 rounded-md mb-2">
              <div className="w-full flex items-center justify-between text-sm mb-3">
                <h1 className="font-semibold text-black">{item.title} </h1>

                <div className="py-1 px-2 rounded-full border text-[0.6rem] min-w-[60px] text-center font-semibold">
                  {getDaysLeft(String(item.deadline))} days
                </div>
              </div>

              {showDetail === item._id && (
                <div className="mb-4">
                  <div className="text-gray-600 text-xs mb-2">
                    {item.description}
                  </div>
                  <div className="flex">
                    <button className={`py-1.5 w-16 `}>Default</button>
                    <button className={`py-1.5 w-16 `}>Planned</button>
                    <button className={`py-1.5 w-16 `}>Working</button>
                    <button className={`py-1.5 w-16 `}>Finished</button>
                  </div>

                  <ul>
                    {item.why.map((whyItem, index) => (
                      <li
                        className="text-[0.6rem] text-gray-600 mb-1"
                        key={index}>
                        - {whyItem}
                      </li>
                    ))}
                  </ul>
                  <div>
                    {minorGoals.map((minorGoal) => (
                      <section key={minorGoal._id}>
                        {minorGoal.major === item._id && (
                          <div className="bg-blue-400 p-4">
                            {minorGoal.title}
                          </div>
                        )}
                      </section>
                    ))}
                  </div>
                  <button
                    className="px-2 py-1.5 rounded-md text-xs text-black font-semibold"
                    onClick={() => setOpened(item._id)}>
                    Add Mini Goals
                  </button>
                </div>
              )}

              <div className="flex justify-end items-center">
                <button
                  className="py-1.5 px-2 rounded-md text-xs text-black font-semibold"
                  onClick={() =>
                    showDetail === item._id
                      ? setShowDetail("")
                      : setShowDetail(item._id)
                  }>
                  {showDetail === item._id ? "Save" : "Detail"}
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
                  <button
                    className="px-2 py-1.5 w-14 rounded-md bg-black text-xs text-white"
                    onClick={() => handleCreate(item._id)}>
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
