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
    </div>
  );
};

export default Diary;
