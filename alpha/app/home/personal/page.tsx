"use client";
import ProfileCard from "@/components/personal/status/page/ProfileCard";
import ProgressBar from "@/components/personal/track/page/ProgressBar";
import { setDiaries } from "@/data/store/diarySlice";
import { DiaryType } from "@/models/personal/Diary";
import { GoalType } from "@/models/personal/Goal";
import { MarkType } from "@/models/personal/Mark";
import fetchDiaries from "@/utils/fetch/fetchDiaries";
import { fetchGoals } from "@/utils/fetch/fetchGoals";
import fetchMarks from "@/utils/fetch/fetchMarks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PersonalPage() {
  const { data: session } = useSession();
  const [goals, setGoals] = useState<GoalType[]>([]);
  const [diaries, setDiaries] = useState<DiaryType[]>([]);

  const [isNone, setIsNone] = useState(true);
  const [loadingOne, setLoadingOne] = useState(true);
  const [loadingTwo, setLoadingTwo] = useState(true);

  useEffect(() => {
    const fillGoals = async () => {
      if (session?.user) {
        setLoadingOne(true);
        const goalDatas = await fetchGoals(session.user._id);
        goalDatas && setGoals(goalDatas);
        goalDatas && setIsNone(false);
        setLoadingOne(false);
      }
    };
    const fillDiaries = async () => {
      if (session?.user._id) {
        setLoadingTwo(true);
        const datas = await fetchDiaries(session.user._id);
        datas && setDiaries(datas as DiaryType[]);
        setLoadingTwo(false);
      }
    };
    fillGoals();
    fillDiaries();
  }, []);
  return (
    <main className="w-full h-full pt-3">
      <section className="w-full flex mb-4 h-[500px] gap-4">
        <div className="h-full w-3/5 flex gap-4">
          <div className="w-1/2 h-full border rounded-sm p-3">
            {!loadingOne ? (
              <main>
                {" "}
                {goals.map((item) => (
                  <div key={item._id}>{item.title}</div>
                ))}
              </main>
            ) : (
              <div>Loading</div>
            )}
          </div>
          <div className="w-1/2 h-full flex flex-col gap-4">
            <div className="w-full h-1/3 border rounded-sm p-3">Make Goals</div>
            <div className="w-full h-2/3 border rounded-sm p-3">
              {!loadingTwo ? (
                <main>
                  {diaries.map((item) => (
                    <div key={item._id}>{item.title}</div>
                  ))}
                </main>
              ) : (
                <div>Loading Diaries</div>
              )}
            </div>
          </div>
        </div>

        <div className="h-full w-2/5 overflow-y-auto">
          <ProfileCard />
        </div>
      </section>
      <ProgressBar />
    </main>
  );
}
