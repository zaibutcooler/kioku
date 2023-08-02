"use client";
import StatusCreateForm from "@/components/personal/status/StatusCreateForm";
import TrackActionCreateForm from "@/components/personal/track/TrackActionScaffoldForm";
import DiaryCreateForm from "@/components/personal/diary/DiaryCreateForm";
import TrackActionForm from "@/components/personal/track/TrackActionForm";
import GoalCreateForm from "@/components/personal/goal/GoalCreateForm";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  console.log("session.user", session?.user);
  return (
    <main>
      {/* <StatusCreateForm /> */}
      {/* <TrackActionCreateForm /> */}
      {/* <TrackActionForm /> */}
      {/* <GoalCreateForm /> */}
      {session?.user && <DiaryCreateForm />}
    </main>
  );
}
