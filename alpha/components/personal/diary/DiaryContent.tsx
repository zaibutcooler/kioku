"use client";
import { useEffect, useState } from "react";
import { DiaryType } from "@/models/personal/Diary";
import fetchDiaries from "@/utils/fetch/fetchDiaries";
import { useSession } from "next-auth/react";

const DiaryContent = () => {
  const [diaries, setDiaries] = useState<DiaryType[]>([]);
  const [currentDiary, setCurrentDiary] = useState<DiaryType | null>(null);
  const { data: session } = useSession();
  const [toggleView, setToggleView] = useState(false);

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
    <main className="w-full ">
      <section>
        {diaries &&
          diaries.map((diary) => (
            <div className="" key={diary._id}>
              {diary.title}
            </div>
          ))}
      </section>
    </main>
  );
};

export default DiaryContent;
