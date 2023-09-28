"use client";
import Calendar from "../home/Calendar";
import NoteCreateForm from "../personal/note/NoteCreateForm";
import Taskbar from "../home/TasksBar";
import DiaryCreateForm from "../personal/diary/DiaryCreateForm";
import TrackActionForm from "../personal/track/TrackActionForm";
import TrackActionScaffoldForm from "../personal/track/TrackActionScaffoldForm";
import TaskCreateForm from "../personal/task/TaskCreateForm";
import GoalCreateForm from "../personal/goal/GoalCreateForm";
import StatusCreateForm from "../personal/status/StatusCreateForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/data/store";
import { clearGadget } from "@/data/store/gadgetSlice";

const Gadgets = () => {
  const showedTool = useSelector(
    (state: RootState) => state.gadget.showedGadget
  );
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(clearGadget());
  };

  const displayGadgets = () => {
    switch (showedTool) {
      case "calendar":
        return <Calendar />;
      case "note":
        return <NoteCreateForm handleBack={handleBack} />;
      case "taskbar":
        return <Taskbar handleBack={handleBack} />;
      case "diary":
        return <DiaryCreateForm handleBack={handleBack} />;
      case "scaffold":
        return <TrackActionScaffoldForm handleBack={handleBack} />;
      case "track":
        return <TrackActionForm handleBack={handleBack} />;
      case "task":
        return <TaskCreateForm handleBack={handleBack} />;
      case "goal":
        return <GoalCreateForm handleBack={handleBack} />;
      case "mark":
        return <StatusCreateForm handleBack={handleBack} />;
      default:
        return null;
    }
  };
  return <div>{displayGadgets()}</div>;
};

export default Gadgets;
