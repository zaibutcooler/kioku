"use client";
import { useEffect, useState } from "react";
import { DiaryType } from "@/models/personal/Diary";
import fetchDiaries from "@/utils/fetch/fetchDiaries";
import { useSession } from "next-auth/react";
import { formatClassicDate } from "@/utils/formatDates";
import { truncateParagraph } from "@/utils";
import { Yellowtail } from "next/font/google";

const yellowTail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yellowtail",
});

const DiaryContent = () => {
  const [diaries, setDiaries] = useState<DiaryType[]>([]);
  const [currentDiary, setCurrentDiary] = useState<DiaryType | null>(null);
  const { data: session } = useSession();
  const [toggleView, setToggleView] = useState(false);

  const renderBody = (inputBody: string) => {
    const body = inputBody.split("\n");

    return (
      <p
        className={`text-gray-600 whitespace-pre-wrap leading-9 font-semibold`}>
        {body.map((line: any, index: number) => (
          <div key={index}>
            {"\t"}
            {"\t"} {line}
            <br />
          </div>
        ))}
      </p>
    );
  };

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
          <main className="text-gray-800 mt-4 px-4">
            <h1 className="mb-2 text-black text-lg font-bold">
              {currentDiary?.title}
            </h1>
            {currentDiary?.body && renderBody(currentDiary.body)}
          </main>
        </section>
      ) : (
        <section>
          {diaries &&
            diaries.map((diary) => (
              <div
                className="p-4 border rounded-lg mb-3 font-semibold text-gray-800"
                key={diary._id}>
                <h1
                  className="cursor-pointer mb-2"
                  onClick={() => {
                    setCurrentDiary(diary);
                    setToggleView(true);
                  }}>
                  {diary.title}
                </h1>
                <p className="text-xs text-gray-500">
                  {truncateParagraph(diary.body)}
                </p>
                <div className="flex justify-end text-[0.6rem] text-gray-500 font-medium">
                  <p>{formatClassicDate(diary.created)}</p>
                </div>
              </div>
            ))}
        </section>
      )}
    </main>
  );
};

export default DiaryContent;
