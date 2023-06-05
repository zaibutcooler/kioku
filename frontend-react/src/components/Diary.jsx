import React from "react";
import { useState, useEffect } from "react";

const Diary = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/goals/diary")
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {datas && datas.map((data) => <div key={data._id}>{data.title}</div>)}
      <div className="flex justify-center">
        <div className="w-1/2 bg-blue-400">Xi</div>
        <div className="w-1/2 bg-slate-400">Xi</div>
      </div>
    </div>
  );
};

export default Diary;
