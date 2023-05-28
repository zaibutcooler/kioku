import React, { useState } from "react";
import Goal from "../components/Goal";
import Diary from "../components/Diary";
import History from "../components/Histroy";
import Note from "../components/Note";
import Summary from "../components/Summary";

const GoalApp = () => {
  const [vgoal, setVgoal] = useState(true);
  const [vdiary, setVdiary] = useState(true);
  const [vnote, setVnote] = useState(false);
  const [vsummary, setVsummary] = useState(false);
  const [vhistory, setVhistory] = useState(false);

  const toggleGoal = () => {
    setVgoal(!vgoal);
    setVdiary(false);
    setVnote(false);
    setVsummary(false);
    setVhistory(false);
  };

  return (
    <div>
      <button onClick={toggleGoal}>Show goal</button>
      {vgoal ? <Goal /> : <div></div>}
      <button onClick={toggleGoal}>Show goal</button>
      {vdiary ? <Diary /> : <div></div>}
      {vnote ? <Note /> : <div></div>}
      {vsummary ? <Summary /> : <div></div>}
      {vhistory ? <History /> : <div></div>}
    </div>
  );
};

export default GoalApp;
