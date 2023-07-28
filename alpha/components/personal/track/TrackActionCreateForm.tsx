"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import DropDown from "./DropDown";
import IconDropDown from "./IconDropDown";
import Checkbox from "./CheckBox";

interface Props {}

const TrackActionCreateForm: React.FC<Props> = ({}) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [related, setRelated] = useState("default");
  const [count, setCount] = useState("");
  const [countType, setCountType] = useState("default");
  const [everyday, setEveryday] = useState(false);
  const [repeatEvery, setRepeatEvery] = useState("");

  const iconOptions = [{ value: "book" }, { value: "work" }, { value: "idea" }];
  const countOptions = [
    { value: "hour" },
    { value: "minute" },
    { value: "rep" },
    { value: "times" },
  ];

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
          <div className="p-3 border bg-gray-50 w-2/5 hidden md:block">
            <main className="w-full h-full bg-white"></main>
          </div>
          <form className="bg-bg_white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full md:w-3/5">
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

            <div className="flex items-center">
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
              <div className="pt-1">
                <DropDown
                  selectedOne={(name: string) => setCountType(name)}
                  prime={countType}
                  options={countOptions}
                />
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox checked={everyday} onChange={(e) => setEveryday(e)} />
              <label
                htmlFor="everyday"
                className="ml-2 cursor-pointer font-semibold text-xs">
                Everyday?
              </label>
            </div>
            {/* //repeat every .... day */}
            <div>
              <label
                htmlFor="title"
                className="block text-xs font-semibold text-gray-700">
                Repeat every ...
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 border border-gray-200 block w-full text-xs  rounded-sm p-2"
                placeholder="Your Title"
              />
            </div>
            <div>
              <textarea
                id="Goal"
                name="Goal"
                required
                rows={4}
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 border border-gray-200 block w-full text-xs  rounded-sm p-2"
                placeholder="Leave a Goal"
              />
            </div>
            {/* //repeat every .... day */}
            <div className="flex justify-between">
              <p>option to choose type for icon</p>
              <button
                type="submit"
                className="px-4 py-1 rounded-lg border border-black ">
                Done
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default TrackActionCreateForm;
