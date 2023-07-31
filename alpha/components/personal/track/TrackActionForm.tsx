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
import { BsFileMinus } from "react-icons/bs";
import { RiRestartFill } from "react-icons/ri";
import Effort from "./daily/Effort";
import { TrackType } from "@/models/personal/Track";
import createTrack from "@/utils/create/createTrack";
import { useSession } from "next-auth/react";

interface Props {}

const TrackActionForm: React.FC<Props> = ({}) => {
  const [scaffold, setScaffold] = useState<TrackScaffoldType[]>([]);
  const [count, setCount] = useState(0);
  const [note, setNote] = useState("");
  const [effort, setEffort] = useState("default");
  const effortOptions = ["100", "80", "60", "40", "25", "0"];

  const [selectedScaffold, setSelectedScaffold] =
    useState<TrackScaffoldType | null>(null);

  const percentage = selectedScaffold
    ? (count / selectedScaffold.count) * 100
    : 0;

  const [history, setHistory] = useState<TrackType[]>([]);

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
    createTrack({
      user: userID,
      item: selectedScaffold?._id || "",
      countType: selectedScaffold?.countType || "",
      count,
      note,
      effort,
    });
  };

  const { data: session } = useSession();
  const userID = session?.user._id as string;

  useEffect(() => {
    const fetchScaffold = async () => {
      try {
        const scaffoldResponse = await fetch(
          `/api/track/scaffold?userID=${userID}`
        );
        const scaffoldDatas = await scaffoldResponse.json();
        setScaffold(scaffoldDatas);
        setSelectedScaffold(scaffoldDatas[0]);
        if (scaffoldResponse.ok) {
          console.log(scaffoldDatas);
          window.alert("humm");
        }
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchScaffold();
  }, []);

  useEffect(() => {
    const fetchTracks = async () => {
      if (!selectedScaffold) return;
      try {
        const trackResponse = await fetch(
          `/api/track?userID=${userID}&scaffoldID=${selectedScaffold?._id}`
        );
        const trackDatas = await trackResponse.json();
        setHistory(trackDatas);
        if (trackResponse.ok) {
          console.log(trackDatas);
          window.alert("humm");
        }
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchTracks();
  }, [selectedScaffold]);

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="bg-white shadow-md rounded-md py-4 w-[500px]  md:w-[600px] lg:w-[130vh] text-xs md:text-sm font-normal mx-3 md:mx-0">
        <div className="h-[40px] px-8 flex border-b  border-gray-100 justify-between items-top">
          <span className="font-semibold">Track Your Actions</span>
          <button onClick={() => {}}>
            <AiOutlineClose className="font-bold" />
          </button>
        </div>
        <section className="flex">
          <div className="p-3 bg-white w-1/4 hidden md:block">
            <main className="w-full h-full bg-white">
              {scaffold &&
                scaffold.map((item) => (
                  <div key={item._id}>
                    <button onClick={() => setSelectedScaffold(item)}>
                      {item.name}
                    </button>
                  </div>
                ))}
            </main>
          </div>
          <div className="bg-white  h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full md:w-3/4">
            <form onSubmit={handleSubmit} className="h-2/3 px-4 py-2 border">
              <h1 className="font-semibold text-sx mb-3 flex items-center">
                <FaBrain className="text-md mr-3" />
                {selectedScaffold && selectedScaffold.name}
              </h1>
              <div className="flex">
                <section className="w-[30vh] rounded-lg border">
                  <div className="h-[30vh] text-black p-2 text-xs font-semibold ">
                    <CircularProgressbar
                      value={percentage}
                      text={`${count}/${
                        selectedScaffold && selectedScaffold.count
                      } ${selectedScaffold && selectedScaffold.countType}`}
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

            <div className="bg-white p-2 h-1/3">
              {Array.isArray(history) &&
                history.map((item) => <div key={item._id}>-{item.count}</div>)}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TrackActionForm;
