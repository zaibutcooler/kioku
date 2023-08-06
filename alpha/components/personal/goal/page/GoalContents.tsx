import { GoalType } from "@/models/personal/Goal";
import { MinorGoalType } from "@/models/personal/MinorGoal";
import { getDaysLeft } from "@/utils";
import { createMinorGoal } from "@/utils/create/createGoal";
import { fetchMiniGoals } from "@/utils/fetch/fetchGoals";
import { updateGoal } from "@/utils/update/updateGoal";
import { useSession } from "next-auth/react";
import { isRouteMatch } from "next/dist/server/future/route-matches/route-match";
import { useEffect, useState } from "react";
import { IoArrowDownCircle } from "react-icons/io5";

interface Props {
  goals: GoalType[];
  handleUpdateGoal: (input: GoalType) => void;
}

const GoalContents: React.FC<Props> = ({ goals, handleUpdateGoal }) => {
  const { data: session } = useSession();
  const [opened, setOpened] = useState("");
  const [showDetail, setShowDetail] = useState("");
  const [minorGoals, setMinorGoals] = useState<MinorGoalType[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");

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

  const handleDetail = async (input: GoalType) => {
    if (input._id === showDetail) {
      setShowDetail("");
      if (status !== input.status) {
        const updatedItem = await updateGoal(input._id, { status });
        updatedItem && handleUpdateGoal(updatedItem);
        window.alert("success");
      }
      setStatus("");
    } else {
      setShowDetail(input._id);
      setStatus(input.status);
    }
  };

  const renderMinigoals = (input: GoalType) => {
    return (
      <section className="text-xs mb-3">
        {minorGoals.map((minorGoal) => (
          <section className="" key={minorGoal._id}>
            {minorGoal.major === input._id && (
              <div className=" p-2 border border-gray-200 mb-2 rounded-md">
                <div className="flex justify-between mb-2">
                  <h1 className="font-semibold text-xs capitalize">
                    {minorGoal.title}
                  </h1>
                  <span className="py-1 px-2 text-center min-w-[50px] text-[0.5rem] border text-black font-semibold rounded-full">
                    {getDaysLeft(String(minorGoal.deadline))} days
                  </span>
                </div>
              </div>
            )}
          </section>
        ))}

        <button
          className="px-2 py-1.5 border border-gray-200 hover:bg-gray-100 text-[0.6rem] text-black font-semibold"
          onClick={() => setOpened(input._id)}>
          Add Mini Goals
        </button>
      </section>
    );
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
                  <div className="text-gray-600 text-xs font-semibold leading-6">
                    {item.description}
                  </div>

                  <ul className="mb-4">
                    {item.why.map((whyItem, index) => (
                      <li
                        className="text-[10px] text-gray-600 font-semibold leading-6"
                        key={index}>
                        - {whyItem}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <div className="flex text-[0.6rem] font-semibold gap-3 mb-4 text-gray-700">
                      <button
                        className={`py-1.5 w-14  border rounded-sm ${
                          status === "default"
                            ? "border-black text-black shadow-lg"
                            : ""
                        }  `}
                        onClick={() => setStatus("default")}>
                        Default
                      </button>
                      <button
                        className={`py-1.5 w-14  border rounded-sm ${
                          status === "planned"
                            ? "border-black text-black shadow-lg"
                            : ""
                        } `}
                        onClick={() => setStatus("planned")}>
                        Planned
                      </button>
                      <button
                        className={`py-1.5 w-14  border rounded-sm ${
                          status === "working"
                            ? "border-black text-black shadow-lg"
                            : ""
                        } `}
                        onClick={() => setStatus("working")}>
                        Working
                      </button>
                      <button
                        className={`py-1.5 w-14  border rounded-sm ${
                          status === "finished"
                            ? "border-black text-black shadow-lg"
                            : ""
                        } `}
                        onClick={() => setStatus("finished")}>
                        Finished
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="">{renderMinigoals(item)}</div>
              <div className="flex justify-end items-center">
                <button
                  className="py-1.5 px-2 rounded-md text-xs text-black font-semibold"
                  onClick={() => handleDetail(item)}>
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
