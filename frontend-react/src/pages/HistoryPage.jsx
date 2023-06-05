import React, { useState, useEffect } from "react";
import axios from "axios";

const HistoryPage = () => {
  const [todoDatas, setTodoDatas] = useState([]);
  const [noteDatas, setNoteDatas] = useState(null);
  const [diaryDatas, setDiaryDatas] = useState(null);
  const [summaryDatas, setSummaryDatas] = useState(null);
  const [goalDatas, setGoalDatas] = useState(null);
  const [historyDatas, setHistoryDatas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startFetching = async () => {
      try {
        console.log("Started");
        const requests = [
          axios.get("http://localhost:5000/todolist/"),
          axios.get("http://localhost:5000/goals/notes/"),
          axios.get("http://localhost:5000/goals/diary/"),
          axios.get("http://localhost:5000/goals/summaries/"),
          axios.get("http://localhost:5000/goals/goals/"),
          axios.get("http://localhost:5000/goals/histories/"),
        ];
        const [res1, res2, res3, res4, res5, res6] = await Promise.all(
          requests
        );
        setTodoDatas(res1.data);
        setNoteDatas(res2.data);
        setDiaryDatas(res3.data);
        setSummaryDatas(res4.data);
        setGoalDatas(res5.data);
        setHistoryDatas(res6.data);
        setLoading(true);
      } catch (error) {
        console.error(error);
      }
      startFetching();
    };
  }, []);

  return (
    <div>
      <div className="">
        <h1 className="text-3xl">Histories</h1>
        {loading &&
          todoDatas.map((item) => <div key={item._id}>{item.title}</div>)}
      </div>
    </div>
  );
};

export default HistoryPage;
