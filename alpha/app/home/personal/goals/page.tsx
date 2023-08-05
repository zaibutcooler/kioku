"use client";
import GoalContents from "@/components/personal/goal/page/GoalContents";
import GoalForm from "@/components/personal/goal/page/GoalForm";

export default function GoalsPage() {
  return (
    <main className="flex w-full h-full py-4">
      <section className="h-full w-3/5  ">
        <GoalContents />
      </section>
      <section className="h-full w-2/5 ml-4">
        <GoalForm />
      </section>
    </main>
  );
}
