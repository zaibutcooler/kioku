"use client";
import { RootState } from "@/data/store";
import { setDiaries } from "@/data/store/diarySlice";
import { DiaryType } from "@/models/personal/Diary";
import createDiary from "@/utils/create/createDiray";
import fetchDiaries from "@/utils/fetch/fetchDiaries";
import { formatClassicDate, formatDateTime } from "@/utils/formatDates";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface Props {
  handleBack: () => void;
}

const DiaryCreateForm: React.FC<Props> = ({}) => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const { data: session } = useSession();

  const [myDiaries, setMyDiaries] = useState<DiaryType[]>([]);

  const userID = session?.user._id || "";
  useEffect(() => {
    const getDatas = async () => {
      const datas = await fetchDiaries(userID);
      datas && setMyDiaries(datas);
    };
    getDatas();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const createdDiary = await createDiary({ user: userID, title, body });
    createdDiary && setMyDiaries([createdDiary, ...myDiaries]);
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2 h-screen">
      <div className="bg-white shadow-md rounded-md w-[500px] md:w-[600px] lg:w-3/4 h-[80vh] md:h-[90vh] lg:h-[95vh] text-xs md:text-sm font-normal mx-3 md:mx-0 relative">
        <form onSubmit={handleSubmit} className="w-full h-full p-3 flex">
          <section className="lg:w-1/5 px-1 pt-3 pb-2">
            <div className="w-full h-full border rounded-md p-2">
              {myDiaries &&
                myDiaries.map((item) => (
                  <div
                    className="w-full p-2 mb-2 rounded-md font-semibold cursor-pointer hover:bg-gray-100"
                    key={item.title}>
                    <h2 className="text-sx mb-1">{item.title}</h2>
                    <div className="text-[0.6rem] flex w-full justify-end font-medium text-gray-400">
                      {formatDateTime(item.created).date}
                    </div>
                  </div>
                ))}
            </div>
          </section>
          <section className="flex-grow py-2 px-3 w-4/5 flex flex-col">
            <div className="flex-grow">
              <textarea
                id="description"
                name="description"
                value={body}
                required
                onChange={(e) => setBody(e.target.value)}
                className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 p-2 h-full"
                placeholder="Start Writing Your Diary"
              />
            </div>
            <div className="mt-3 flex justify-between ">
              <div className="flex items-center">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-[300px] text-xs  border-gray-200 p-1.5 rounded-sm"
                  placeholder="Give a name to your memory"
                />
                <label className="ml-4 cursor-pointer text-gray-500 hover:text-gray-800 border py-1 px-3 mt-0.5 font-bold">
                  <input
                    type="file"
                    accept="image/*" // Only accept image files
                    onChange={() => {}}
                    className="hidden"
                  />
                  Add Image
                </label>
              </div>

              <button
                type="submit"
                className="px-4 py-1.5 rounded-sm bg-black text-white hover:bg-gray-900">
                Done
              </button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
};

export default DiaryCreateForm;
