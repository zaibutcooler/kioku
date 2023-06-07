import React, { useState, useEffect } from "react";
import SummaryForm from "../mini-com/SummaryForm";
import SummaryCard from "../mini-com/SummaryCard";

const Summary = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/goals/summaries")
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-4">
        <SummaryForm />
      </div>
      <div className="md:w-3/5 p-2">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
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
