"use client";
import ProfileCard from "@/components/personal/status/page/ProfileCard";
import ProgressBar from "@/components/personal/track/page/ProgressBar";
import { MarkType } from "@/models/personal/Mark";
import fetchMarks from "@/utils/fetch/fetchMarks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PersonalPage() {
  const { data: session } = useSession();
  const [marks, setMarks] = useState<MarkType[]>([]);

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const markDatas = await fetchMarks(session.user._id);
        markDatas && setMarks(markDatas);
      }
    };
    fillDatas();
  }, []);

  return (
    <main>
      <section className="w-full flex">
        <div>
          <ProfileCard marks={marks} />
        </div>
      </section>
      <ProgressBar />
    </main>
  );
}
