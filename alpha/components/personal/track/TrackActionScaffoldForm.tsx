"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import DropDown from "./scaffold/DropDown";
import IconDropDown from "./scaffold/IconDropDown";
import Checkbox from "./scaffold/CheckBox";
import ChooseDays from "./scaffold/ChooseDays";
import createTrackScaffold from "@/utils/create/createTrackScaffold";
import { useSession } from "next-auth/react";

interface Props {
  handleBack: () => void;
}

const TrackActionScaffoldForm: React.FC<Props> = ({ handleBack }) => {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [related, setRelated] = useState("default");
  const [count, setCount] = useState("");
  const [countType, setCountType] = useState("default");
  const [repeatEvery, setRepeatEvery] = useState<string[]>([]);

  const [datas, setDatas] = useState([]);

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const [showChooseDays, setShowChooseDays] = useState(false);
  const iconOptions = [{ value: "book" }, { value: "work" }, { value: "idea" }];
  const countOptions = [
    { value: "hour" },
    { value: "minute" },
    { value: "rep" },
    { value: "times" },
  ];

  let everyday = () => {
    if (repeatEvery.length === 7) {
      return true;
    }
    return false;
  };

  const { data: session } = useSession();
  const userID = session?.user._id as string;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    createTrackScaffold({
      user: userID,
      name: title,
      countType,
      count: parseInt(count),
      goal,
      everyday: everyday(),
      repeat: repeatEvery,
      type: related,
    });
  };

  const fetchDatas = async () => {
    try {
      const response = await fetch(`/api/track/scaffold?userID=${userID}`);
      if (response.ok) {
        handleBack();
      }
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="bg-white shadow-md rounded-md py-4 w-[500px] md:w-[600px] lg:w-[120vh] text-xs md:text-sm font-normal mx-3 md:mx-0">
        <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
          <span className="font-semibold">Actions You Want To Track</span>
          <button onClick={() => {}}>
            <AiOutlineClose className="font-bold" />
          </button>
        </div>
        <section className="flex">
          <div className="p-3 w-2/5 hidden md:block  border-r">
            {/* // part one */}
            <main className="w-full h-full bg-white"></main>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full md:w-3/5">
            <div className="flex justify-between items-center">
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 border mr-2 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm p-2"
                placeholder="Your Title"
              />
              <div className="pt-1">
                <IconDropDown
                  selectedOne={(name: string) => setRelated(name)}
                />
              </div>
            </div>
            <section>
              <div className="flex items-center mb-2">
                <button
                  onClick={() => setShowChooseDays(true)}
                  className="px-2 py-1 rounded-md border text-gray-800 text-xs font-semibold"
                  type="button">
                  Choose Days
                </button>
                {showChooseDays && (
                  <ChooseDays
                    handleBack={() => setShowChooseDays(false)}
                    chooseDays={(name) => setRepeatEvery(name)}
                    days={days}
                  />
                )}
              </div>
              <div className="min-h-[80px] border rounded-lg p-2">
                <div className="flex flex-wrap font-semibold">
                  {repeatEvery.map((day) => (
                    <span
                      key={day}
                      className="px-3 text-[0.7rem] py-[3px] rounded-full border border-gray-400 capitalize mb-2 mr-2">
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </section>
            <div className="flex items-center">
              <div className="pt-1 mr-2">
                <DropDown
                  selectedOne={(name: string) => setCountType(name)}
                  prime={countType}
                  options={countOptions}
                />
              </div>
              <input
                type="number"
                id="count"
                name="count"
                value={count}
                required
                onChange={(e) => setCount(e.target.value)}
                className="mt-1 border mr-2 focus:ring-gray-400  focus:border-gray-400 block w-[150px] text-xs border-gray-200 rounded-sm p-2"
                placeholder="Count"
              />
            </div>

            <div>
              <textarea
                id="Note"
                name="Note"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                rows={4}
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 border border-gray-200 block w-full text-xs  rounded-sm p-2"
                placeholder="Leave a Note"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1 rounded-md bg-black text-white hover:bg-gray-900">
                Done
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default TrackActionScaffoldForm;
