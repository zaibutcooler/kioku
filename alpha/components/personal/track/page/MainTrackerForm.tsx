"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TrackScaffoldType } from "@/models/personal/TrackScaffold";
import {
  IoBatteryChargingSharp,
  IoReloadCircle,
  IoReloadOutline,
} from "react-icons/io5";
import { FaBrain, FaMinus } from "react-icons/fa";
import Effort from "../daily/Effort";
import { TrackCreateType, TrackType } from "@/models/personal/Track";
import { useSession } from "next-auth/react";

interface Props {
  handleDone: (input: TrackCreateType) => void;
  handleReset: () => void;
  currentScaffold: TrackScaffoldType | null;
}

const MainTrackerForm: React.FC<Props> = ({
  handleDone,
  handleReset,
  currentScaffold,
}) => {
  const [count, setCount] = useState(0);
  const [note, setNote] = useState("");
  const [effort, setEffort] = useState("default");
  const effortOptions = ["100", "80", "60", "40", "25", "0"];

  const { data: session } = useSession();

  const percentage = currentScaffold
    ? (count / currentScaffold.count) * 100
    : 0;

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newValue = parseInt(inputValue, 10);

    if (isNaN(newValue)) {
      setCount(0);
    } else {
      setCount(newValue);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (session?.user && currentScaffold)
      handleDone({
        user: session.user._id,
        item: currentScaffold._id,
        countType: currentScaffold?.countType,
        count,
        note,
        effort,
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-white  h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full">
      <form onSubmit={handleSubmit} className="h-2/3 px-4 py-2">
        <h1 className="font-semibold text-sx mb-3 flex items-center">
          <FaBrain className="text-md mr-3" />
          {currentScaffold?.name}
        </h1>
        <div className="flex">
          <section className="w-[30vh] rounded-lg border">
            <div className="h-[30vh] text-black p-2 text-xs font-semibold ">
              <CircularProgressbar
                value={percentage}
                text={`${count}/${currentScaffold && currentScaffold.count} ${
                  currentScaffold && currentScaffold.countType
                }`}
                styles={{
                  path: {
                    stroke: "#000000",
                  },
                  text: {
                    fill: "#000000",
                    fontSize: "7px",
                  },
                }}
              />
            </div>
            <div className="flex justify-between px-3 mb-4">
              <button
                className="font-bold py-1 px-2 hover:bg-gray-200 rounded-full"
                type="button"
                onClick={() => setCount(count - 1)}>
                -
              </button>
              <input
                type="text"
                value={count}
                onChange={handleCountChange}
                className="w-[12vh] py-0.5 px-1 border rounded-sm text-center"
              />
              <button
                className="font-bold py-1 px-2 hover:bg-gray-200 rounded-full"
                type="button"
                onClick={() => setCount(count + 1)}>
                +
              </button>
            </div>
          </section>
          <section className="w-[55vh] rounded-lg ml-4">
            <div className="h-[30vh] text-black p-2 text-xs font-semibold ">
              <div className="flex justify-between mb-3">
                <Effort
                  selectedOne={(name: string) => setEffort(name)}
                  prime={effort}
                  options={effortOptions}
                />
                <button
                  type="button"
                  className="px-1 py-1 text-sx rounded-full bg-white text-gray-800 hover:bg-gray-50 border">
                  <IoReloadOutline />
                </button>
              </div>
              <div className="flex-grow font-medium">
                <textarea
                  id="note"
                  name="note"
                  value={note}
                  required
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm p-2 h-full" // Set the height to 100%
                  placeholder="Leave a note"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1.5 rounded-sm bg-black text-white hover:bg-gray-900">
                Done
              </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default MainTrackerForm;
