"use client";

import { setGadget } from "@/data/store/gadgetSlice";
import { TrackCreateType, TrackType } from "@/models/personal/Track";
import { TrackScaffoldType } from "@/models/personal/TrackScaffold";
import fetchTrackScaffold from "@/utils/fetch/fetchTrackScaffolds";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Line } from "rc-progress";
import fetchTracks from "@/utils/delete/deleteTracks";
import { fetchAllTracks } from "@/utils/fetch/fetchTracks";
import MainTrackerForm from "./MainTrackerForm";
import createTrack from "@/utils/create/createTrack";

const TrackContent = () => {
  const dispatch = useDispatch();
  const [scaffolds, setScaffolds] = useState<TrackScaffoldType[]>([]);
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [displayedTracks, setDisplayedTracks] = useState<TrackType[]>([]);

  const [currentScaffold, setCurrentScaffold] =
    useState<TrackScaffoldType | null>(null);

  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);

  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const scaffoldDatas = await fetchTrackScaffold(session.user._id);
        scaffoldDatas && setScaffolds(scaffoldDatas);
        setCurrentScaffold(scaffolds[0]);
        const trackDatas = await fetchAllTracks(session.user._id);
        trackDatas && setTracks(trackDatas);
        console.log(scaffolds[0]);
      }
    };

    fillDatas();
  }, []);

  const handleSubmit = async (input: TrackCreateType) => {
    const newTrack = await createTrack(input);
    if (newTrack) {
      const trackArray = [...tracks];
      const index = trackArray.findIndex((item) => item._id === newTrack._id);
      trackArray[index] = newTrack;
      setTracks(trackArray);
      window.alert("success");
    }
  };

  const handleChoose = (scaffold: TrackScaffoldType) => {
    setCurrentScaffold(scaffold);
  };

  return (
    <main className="h-[500px] gap-4 w-full flex">
      <div className="w-1/3 h-full rounded-sm border p-4">
        <section className="h-2/3 w-full ">
          <div className="text-sx font-semibold">
            {scaffolds &&
              scaffolds.map((item, index) => (
                <div className="mb-2 p-2 border rounded-md" key={index}>
                  <button className="" onClick={() => handleChoose(item)}>
                    {item.name}
                  </button>
                  <div className="mt-2">
                    <Line percent={10} strokeWidth={3} strokeColor="#000" />
                  </div>
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
        <section className="p-2 h-2/3 w-full">
          {currentScaffold && (
            <MainTrackerForm
              handleDone={handleSubmit}
              handleReset={() => {}}
              currentScaffold={currentScaffold}
            />
          )}
        </section>
        <section className="p-2 h-1/3 w-full flex">
          <div className="w-1/3 h-full bg-black"></div>
          <div className="w-2/3 h-full bg-blue-300"></div>
        </section>
      </div>
    </main>
  );
};

export default TrackContent;
