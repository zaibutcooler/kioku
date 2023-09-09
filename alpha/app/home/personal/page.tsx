"use client";
import { DiaryLoading } from "@/components/personal/Loadings";
import ProfileCard from "@/components/personal/status/page/ProfileCard";
import ProgressBar from "@/components/personal/track/page/ProgressBar";
import { setDiaries } from "@/data/store/diarySlice";
import { DiaryType } from "@/models/personal/Diary";
import { GoalType } from "@/models/personal/Goal";
import { MarkType } from "@/models/personal/Mark";
import { MinorGoalType } from "@/models/personal/MinorGoal";
import { getDaysLeft } from "@/utils";
import fetchDiaries from "@/utils/fetch/fetchDiaries";
import { fetchGoals, fetchMiniGoals } from "@/utils/fetch/fetchGoals";
import fetchMarks from "@/utils/fetch/fetchMarks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PersonalPage() {
  const { data: session } = useSession();
  const [goals, setGoals] = useState<GoalType[]>([]);
  const [diaries, setDiaries] = useState<DiaryType[]>([]);
  const [miniGoals, setMiniGoals] = useState<MinorGoalType[]>([]);

  const [isNone, setIsNone] = useState(true);
  const [loadingOne, setLoadingOne] = useState(true);
  const [loadingTwo, setLoadingTwo] = useState(true);
  const [loadingThree, setLoadingThree] = useState(true);

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
    const fillMiniGoals = async () => {
      if (session?.user) {
        setLoadingThree(true);
        const minorGoalDatas = await fetchMiniGoals(session.user._id);
        minorGoalDatas && setMiniGoals(minorGoalDatas);
        setLoadingThree(false);
      }
    };
    fillGoals();
    fillDiaries();
    fillMiniGoals();
  }, []);

  const renderMinigoals = (input: GoalType) => {
    return (
      <section className="text-xs">
        {!loadingThree ? (
          <div>
            {miniGoals.map((minorGoal) => (
              <section className="" key={minorGoal._id}>
                {minorGoal.major === input._id && (
                  <div className=" pl-3  mt-2 ">{minorGoal.title}</div>
                )}
              </section>
            ))}
          </div>
        ) : (
          <div className="animate-pulse">
            <div className="w-full rounded-md h-5 bg-gray-100 mt-1 ml-3" />
            <div className="w-full rounded-md h-5 bg-gray-100 mt-1 ml-3" />
          </div>
        )}
      </section>
    );
  };

  const loadingArr = ["", "", "", "", ""];

  return (
    <main className="w-full h-full pt-3">
      <section className="w-full flex mb-4 h-[500px] gap-4">
        <div className="h-full w-3/5 flex gap-4">
          <div className="w-1/2 h-full border rounded-sm p-3">
            {!loadingOne ? (
              <main>
                {" "}
                {goals.map((item) => (
                  <div key={item._id} className="mb-3 text-sm font-medium px-2">
                    <h1>{item.title}</h1>
                    <div>{renderMinigoals(item)}</div>
                  </div>
                ))}
              </main>
            ) : (
              <div className="w-full animate-pulse">
                {loadingArr.map((item, index) => (
                  <div key={index}>
                    <div className="w-full rounded-md h-5 bg-gray-100 " />
                    <div className="w-full pl-3">
                      <div className="w-full rounded-md h-4 bg-gray-100 mt-2" />
                    </div>
                    <div className="w-full pl-3">
                      <div className="w-full rounded-md h-4 bg-gray-100 mt-2 mb-3" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-1/2 h-full flex flex-col gap-4">
            <div className="w-full h-1/3 border rounded-sm p-3">Make Goals</div>
            <div className="w-full h-2/3 border rounded-sm p-3">
              {!loadingTwo ? (
                <main>
                  {diaries.map((item) => (
                    <div key={item._id} className="w-full p-1 mb-2">
                      <h1 className="text-sm font-medium">{item.title}</h1>
                      <p className="text-[0.6rem] text-gray-400 text-right w-full ">
                        23 August 2023
                      </p>
                    </div>
                  ))}
                </main>
              ) : (
                <div>{DiaryLoading()}</div>
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
