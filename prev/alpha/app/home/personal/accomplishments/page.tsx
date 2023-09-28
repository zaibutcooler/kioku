"use client";

import ProfileCard from "@/components/personal/status/page/ProfileCard";
import StatusContent from "@/components/personal/status/page/StatusContent";
import { MarkType } from "@/models/personal/Mark";
import fetchMarks from "@/utils/fetch/fetchMarks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Accomplishments() {
  const [marks, setMarks] = useState<MarkType[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const newMarks = await fetchMarks(session.user._id);
        newMarks && setMarks(newMarks);
      }
    };
    fillDatas();
  }, []);

  const handleNewItem = (input: MarkType) => {
    setMarks([input, ...marks]);
    window.alert("success");
  };

  return (
    <main className="flex w-full h-full py-4">
      <section className="h-full w-2/5 mr-4 overflow-y-auto ">
        <ProfileCard />
      </section>
      <section className="h-full w-3/5 overflow-y-auto  scrollbar-thin scrollbar-thumb-white scrollbar-track-white">
        <StatusContent marks={marks} handleNewItem={handleNewItem} />
      </section>
    </main>
  );
}
