"use client";

import { setGadget } from "@/data/store/gadgetSlice";
import { TrackType } from "@/models/personal/Track";
import { TrackScaffoldType } from "@/models/personal/TrackScaffold";
import fetchTrackScaffold from "@/utils/fetch/fetchTrackScaffolds";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Line } from "rc-progress";

const TrackContent = () => {
  const dispatch = useDispatch();
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
        <section className="h-2/3 w-full ">
          <div className="text-sx font-semibold">
            {scaffolds &&
              scaffolds.map((item, index) => (
                <div className="mb-2 p-2 border rounded-md" key={index}>
                  <span className="pb-2">{item.name}</span>
                  <Line percent={10} strokeWidth={3} strokeColor="#000" />
                </div>
              ))}
          </div>
        </section>
        <section className="h-1/3 w-full bg-gray-200">
          <button
            className="bg-black text-white py-2 px-4 rounded-sm"
            onClick={() => {
              dispatch(setGadget("scaffold"));
            }}>
            Add Actions
          </button>
        </section>
      </div>
      <div className="w-2/3 h-full rounded-sm border">
        <section className="p-2">
          {" "}
          {scaffolds &&
            scaffolds.map((item, index) => (
              <div className="mb-2 p-2 border rounded-md" key={index}>
                {item.name}
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default TrackContent;
