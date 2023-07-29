"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TrackScaffoldType } from "@/models/personal/TrackScaffold";
import { IoBatteryChargingSharp } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";

interface Props {}

const TrackActionForm: React.FC<Props> = ({}) => {
  const [item, setItem] = useState<TrackScaffoldType[]>([]);
  const [countType, setCountType] = useState("reps");
  const [count, setCount] = useState(0);
  const [note, setNote] = useState("");
  const percentage = 66;

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newValue = parseInt(inputValue, 10);

    if (isNaN(newValue)) {
      setCount(0);
    } else {
      setCount(newValue);
    }
  };

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
            <main className="w-full h-full bg-white">All Habits</main>
          </div>
          <div className="bg-white  h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full md:w-3/4">
            <form className="h-2/3 px-8 py-3 border">
              <h1 className="font-semibold text-sx mb-3 flex items-center">
                <FaBrain className="text-md mr-3" />
                This is title
              </h1>
              <section className="w-[30vh] rounded-lg border">
                <div className="h-[30vh] text-black p-2 text-xs font-semibold ">
                  <CircularProgressbar
                    value={percentage}
                    text={`${count}/20 min`}
                    styles={{
                      path: {
                        stroke: "#000000",
                      },
                      text: {
                        fill: "#000000",
                        fontSize: "10px",
                      },
                    }}
                  />
                </div>
                <div className="flex justify-between px-3 mb-4">
                  <button type="button" onClick={() => setCount(count - 1)}>
                    -
                  </button>
                  <input
                    type="text"
                    value={count}
                    onChange={handleCountChange}
                    className="w-[12vh] py-0.5 px-1 border rounded-sm text-center"
                  />
                  <button type="button" onClick={() => setCount(count + 1)}>
                    +
                  </button>
                </div>
              </section>
            </form>

            <div className="bg-white p-2 h-1/3">Past history</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TrackActionForm;
