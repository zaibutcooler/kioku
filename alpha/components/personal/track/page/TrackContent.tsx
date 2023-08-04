"use client";

import { TrackType } from "@/models/personal/Track";
import { TrackScaffoldType } from "@/models/personal/TrackScaffold";
import fetchTrackScaffold from "@/utils/fetch/fetchTrackScaffolds";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const TrackContent = () => {
  const [scaffolds, setScaffolds] = useState<TrackScaffoldType[]>([]);
  const [displayedTracks, setDisplayedTracks] = useState<TrackType[]>([]);

  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const scaffoldDatas = await fetchTrackScaffold(session.user._id);
        scaffoldDatas && setScaffolds(scaffoldDatas);
      }
    };

    fillDatas();
  }, []);
  return (
    <main className="h-[500px] gap-4 w-full flex">
      <div className="w-1/3 h-full rounded-sm border p-4">
        <section className="h-2/3 w-full bg-gray-300">
          <div className="">
            {scaffolds &&
              scaffolds.map((item, index) => (
                <div className="mb-3" key={index}>
                  {item.countType}
                </div>
              ))}
          </div>
        </section>
        <section className="h-1/3 w-full bg-gray-200">
          <button className="bg-black text-white py-2 px-4 rounded-sm">
            Add Actions
          </button>
        </section>
      </div>
      <div className="w-2/3 h-full rounded-sm border">
        <section></section>
      </div>
    </main>
  );
};

export default TrackContent;
