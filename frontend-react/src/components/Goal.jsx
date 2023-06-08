import React, { useState, useEffect } from "react";
import GoalForm from "../mini-com/GoalForm";
import axios from "axios";
import GoalCard from "../mini-com/GoalCard";

const Goal = () => {
  const url = "http://localhost:5000/goals/goals";

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data.sort((a, b) => b.created.localeCompare(a.created)));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (toSend) => {
    axios
      .post(url, toSend)
      .then((res) => {
        console.log("Uploaded Data Successfully");
        const updatedData = [res.data, ...datas];
        setDatas(updatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      <div className="w-2/5 p-2">
        <GoalForm handleSubmit={handleSubmit} />
      </div>
      <div className="w-3/5 p-2">
        {datas.map((entry) => (
          <div key={entry.id}>
            <GoalCard goal={entry} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goal;
