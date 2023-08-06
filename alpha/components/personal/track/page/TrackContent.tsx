"use client";

import { setGadget } from "@/data/store/gadgetSlice";
import { TrackCreateType, TrackType } from "@/models/personal/Track";
import { TrackScaffoldType } from "@/models/personal/TrackScaffold";
import fetchTrackScaffold from "@/utils/fetch/fetchTrackScaffolds";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Line } from "rc-progress";
import { fetchTrackWithDay } from "@/utils/fetch/fetchTracks";
import MainTrackerForm from "./MainTrackerForm";
import createTrack from "@/utils/create/createTrack";
import { AiOutlineDelete, AiOutlineEyeInvisible } from "react-icons/ai";
import Confirm from "@/components/error/Confirm";
import {
  deleteTrackScaffold,
  hideTrackScaffold,
} from "@/utils/delete/deleteTrackScaffolds";

const TrackContent = () => {
  const dispatch = useDispatch();
  const [scaffolds, setScaffolds] = useState<TrackScaffoldType[]>([]);

  const [currentScaffold, setCurrentScaffold] =
    useState<TrackScaffoldType | null>(null);

  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);
  const [mainTrack, setMainTrack] = useState<TrackType[]>([]);

  const [confirmHide, setConfirmHide] = useState("");
  const [confirmDelete, setConfirmDelete] = useState("");

  const [showDate, setShowDate] = useState();

  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      if (session?.user) {
        const scaffoldDatas = await fetchTrackScaffold(session.user._id);
        const filteredScaffolds = await scaffoldDatas?.filter(
          (item: TrackScaffoldType) => item.hide !== true
        );

        !currentTrack &&
          filteredScaffolds &&
          setCurrentScaffold(filteredScaffolds[0]);
        filteredScaffolds && setScaffolds(filteredScaffolds);

        const trackDatas = await fetchTrackWithDay(session.user._id, "");
        trackDatas && setMainTrack(trackDatas);
      }
    };

    fillDatas();
  }, []);

  const handleSubmit = async (input: TrackCreateType) => {
    const newTrack = await createTrack(input);
    if (newTrack) {
      const trackArray = [...mainTrack];
      const index = trackArray.findIndex((item) => item._id === newTrack._id);
      trackArray[index] = newTrack;
      setMainTrack(trackArray);
      window.alert("success");
    }
  };

  const handleChoose = (input: TrackScaffoldType) => {
    setCurrentScaffold(input);
    const track = mainTrack.find((item) => item.item === input._id);
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

  const handleDelete = async () => {
    if (session?.user && confirmDelete) {
      window.alert("clicked");
      const deletedScaffold = await deleteTrackScaffold(confirmDelete);
      console.log("ds", deletedScaffold);
      setScaffolds(
        scaffolds.filter((item) => item._id !== deletedScaffold?._id)
      );
      setConfirmDelete("");
    }
  };

  const handleHide = async () => {
    if (session?.user && confirmHide) {
      const hidedScaffold = await hideTrackScaffold(confirmHide);
      setScaffolds(scaffolds.filter((item) => item._id !== hidedScaffold?._id));
      setConfirmHide("");
    }
  };

  return (
    <main className="h-[500px] gap-4 w-full flex">
      {confirmHide && (
        <Confirm
          handleBack={() => {
            setConfirmHide("");
          }}
          handleConfirm={handleHide}
          text="hide"
        />
      )}
      {confirmDelete && (
        <Confirm
          handleBack={() => setConfirmDelete("")}
          handleConfirm={handleDelete}
          text="delete"
        />
      )}
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
                      <button
                        className="p-1 rounded-full hover:bg-gray-200"
                        onClick={() => setConfirmHide(item._id)}>
                        <AiOutlineEyeInvisible />
                      </button>
                      <button
                        className="p-1 rounded-full hover:bg-gray-200"
                        onClick={() => setConfirmDelete(item._id)}>
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => handleChoose(item)}>
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
