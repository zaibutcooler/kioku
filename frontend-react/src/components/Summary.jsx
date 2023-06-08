import React, { useState, useEffect } from "react";
import SummaryForm from "../mini-com/SummaryForm";
import SummaryCard from "../mini-com/SummaryCard";
import axios from "axios";

const Summary = () => {
  const url = "http://localhost:5000/goals/summaries";

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
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-4">
        <SummaryForm handleSubmit={handleSubmit} />
      </div>
      <div className="md:w-3/5">
        <div className="grid grid-cols-2 md:grid-cols- gap-1 mb-4">
          {datas &&
            datas.map((entry) => (
              <div key={entry._id}>
                <SummaryCard summary={entry} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
