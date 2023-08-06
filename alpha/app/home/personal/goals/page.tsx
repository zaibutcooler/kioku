"use client";
import GoalContents from "@/components/personal/goal/page/GoalContents";
import GoalForm from "@/components/personal/goal/page/GoalForm";
import { GoalType } from "@/models/personal/Goal";
import { fetchGoals } from "@/utils/fetch/fetchGoals";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function GoalsPage() {
  const { data: session } = useSession();
  const [goals, setGoals] = useState<GoalType[]>([]);

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const goalDatas = await fetchGoals(session.user._id);
        goalDatas && setGoals(goalDatas);
      }
    };
    fillDatas();
  }, []);

  const handleNewGoal = (input: GoalType) => {
    setGoals([input, ...goals]);
    window.alert("success");
  };

  return (
    <main className="flex w-full h-full py-4">
      <section className="h-full w-3/5  ">
        {goals && <GoalContents goals={goals} />}
      </section>
      <section className="h-full w-2/5 ml-4">
        <GoalForm handleNewGoal={handleNewGoal} />
      </section>
    </main>
  );
}
