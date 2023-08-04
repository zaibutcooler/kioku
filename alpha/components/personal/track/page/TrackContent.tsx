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
import { fetchAllTracks, fetchTrackWithDay } from "@/utils/fetch/fetchTracks";
import MainTrackerForm from "./MainTrackerForm";
import createTrack from "@/utils/create/createTrack";
import { AiOutlineDelete, AiOutlineEyeInvisible } from "react-icons/ai";

const TrackContent = () => {
  const dispatch = useDispatch();
  const [scaffolds, setScaffolds] = useState<TrackScaffoldType[]>([]);
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [displayedTracks, setDisplayedTracks] = useState<TrackType[]>([]);

  const [currentScaffold, setCurrentScaffold] =
    useState<TrackScaffoldType | null>(null);

  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);
  const [mainTrack, setMainTrack] = useState<TrackType[]>([]);

  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const scaffoldDatas = await fetchTrackScaffold(session.user._id);
        scaffoldDatas && setScaffolds(scaffoldDatas);
        !currentTrack && setCurrentScaffold(scaffolds[0]);
        const trackDatas = await fetchAllTracks(session.user._id);
        const trackDays = await fetchTrackWithDay(session.user._id, "");
        trackDays && setMainTrack(trackDays);
        console.log(trackDays);
        // trackDatas && setTracks(trackDatas);
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
      setMainTrack(trackArray);
      window.alert("success");
    }
  };

  const handleChoose = (input: TrackScaffoldType) => {
    setCurrentScaffold(input);
    const track = tracks.find((item) => item.item === input._id);
    track ? setCurrentTrack(track) : setCurrentTrack(null);
  };

  const getPercent = (input: TrackScaffoldType) => {
    const track = mainTrack.find((item) => item.item === input._id);
    if (track) {
      const result = (Number(track?.count) / Number(input.count)) * 100;
      return Number(result.toFixed(2));
    } else {
      return 0;
    }
  };

  const handleDelete = () => {};

  const handleHide = () => {};

  return (
    <main className="h-[500px] gap-4 w-full flex">
      <div className="w-1/3 h-full rounded-sm border p-4">
        <section className="h-full overflow-y-auto w-full ">
          <div className="text-sx font-semibold">
            {scaffolds &&
              scaffolds.map((item, index) => (
                <div className="mb-2 p-2 border rounded-" key={index}>
                  <div className="w-full flex justify-between">
                    <button className="" onClick={() => handleChoose(item)}>
                      {item.name}
                    </button>
                    <div className="flex gap-2">
                      <button className="p-1 rounded-full hover:bg-gray-200">
                        <AiOutlineEyeInvisible />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-200">
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2" onClick={() => handleChoose(item)}>
                    <Line
                      percent={getPercent(item)}
                      strokeWidth={3}
                      strokeColor="#000"
                    />
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
      <div className="w-2/3 h-full rounded-sm border">
        <section className="p-2 h-2/3 w-full">
          {currentScaffold && (
            <MainTrackerForm
              handleDone={handleSubmit}
              handleReset={() => {}}
              currentScaffold={currentScaffold}
              pastTrack={currentTrack}
            />
          )}
        </section>
        <section className="p-2 h-1/3 w-full flex gap-2">
          <div className="w-1/3 h-full border rounded-md p-3">
            <h1 className="font-semibold mb-2">Add More</h1>
            <p className="text-[0.6rem] text-gray-500 mb-2">
              Track your habits and actions in order to build good habits and
              destory bad habits.
            </p>
            <button
              className="bg-black text-xs text-white py-2 px-4 rounded-sm"
              onClick={() => {
                dispatch(setGadget("scaffold"));
              }}>
              Create
            </button>
          </div>
          <div className="w-2/3 h-full border rounded-md p-3">
            <h1 className="font-semibold mb-2">Overall progress</h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TrackContent;
