"use client";
import { useEffect, useState } from "react";
import { DiaryType } from "@/models/personal/Diary";
import fetchDiaries from "@/utils/fetch/fetchDiaries";
import { useSession } from "next-auth/react";
import { current } from "@reduxjs/toolkit";

const DiaryContent = () => {
  const [diaries, setDiaries] = useState<DiaryType[]>([]);
  const [currentDiary, setCurrentDiary] = useState<DiaryType | null>(null);
  const { data: session } = useSession();
  const [toggleView, setToggleView] = useState(true);

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user._id) {
        const datas = await fetchDiaries(session.user._id);
        setDiaries(datas as DiaryType[]);
      }
    };
    fillDatas();
  }, []);

  return (
    <main className="w-full overflow-y-auto">
      {toggleView ? (
        <section className="font-semibold p-3 border rounded-md min-h-[100vh] mb-4">
          <button
            className=" text-[0.6rem] "
            onClick={() => {
              setToggleView(false);
              setCurrentDiary(null);
            }}>
            Back
          </button>
          <main className="text-gray-800 mt-4 px-2">{currentDiary?.title}</main>
        </section>
      ) : (
        <section>
          {diaries &&
            diaries.map((diary) => (
              <div
                onClick={() => {
                  setCurrentDiary(diary);
                  setToggleView(true);
                }}
                className="p-4 border rounded-lg mb-3 font-semibold text-gray-800"
                key={diary._id}>
                {diary.title}
              </div>
            ))}
        </section>
      )}
    </main>
  );
};

export default DiaryContent;
