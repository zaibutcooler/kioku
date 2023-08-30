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

  const [isNone, setIsNone] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        setLoading(true);
        const goalDatas = await fetchGoals(session.user._id);
        goalDatas && setGoals(goalDatas);
        goalDatas && setIsNone(false);
        setLoading(false);
      }
    };
    fillDatas();
  }, []);

  const handleNewGoal = (input: GoalType) => {
    setGoals([input, ...goals]);
    window.alert("success");
  };

  const handleUpdateGoal = (input: GoalType) => {
    let goalArray = [...goals];
    let index = goals.findIndex((item) => item._id === input._id);
    goalArray[index] = input;
    setGoals(goalArray);
  };

  return (
    <main className="flex w-full h-full py-4">
      <section className="h-full w-3/5  ">
        {!loading ? (
          <div>
            {isNone ? (
              <div>None</div>
            ) : (
              <GoalContents goals={goals} handleUpdateGoal={handleUpdateGoal} />
            )}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </section>
      <section className="h-full w-2/5 ml-4">
        <GoalForm handleNewGoal={handleNewGoal} />
      </section>
    </main>
  );
}
