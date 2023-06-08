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
        const filteredData = res.data.filter((item) => !item.isCompleted);
        setDatas(
          filteredData.sort((a, b) => b.created.localeCompare(a.created))
        );
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

  const handleSucceed = (toSend, id) => {
    axios
      .patch(`${url}/${id}`, toSend)
      .then((res) => console.log("Updated"))
      .catch((err) => console.log(err));
    const updatedData = datas.filter((data) => data._id !== id);
    setDatas(updatedData);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => console.log("Deleted"))
      .catch((err) => console.log(err));
    const updatedData = datas.filter((data) => data._id !== id);
    setDatas(updatedData);
  };

  return (
    <div className="flex">
      <div className="w-2/5 p-2">
        <GoalForm handleSubmit={handleSubmit} />
      </div>
      <div className="w-3/5 p-2">
        {datas.map((entry) => (
          <div key={entry.id}>
            <GoalCard
              goal={entry}
              handleSucceed={handleSucceed}
              handleDelete={() => handleDelete(entry._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goal;
