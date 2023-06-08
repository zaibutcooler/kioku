import React, { useState, useEffect } from "react";
import FailureForm from "../mini-com/FailureForm";
import AccomFailureCard from "../mini-com/AccomFailureCard";
import axios from "axios";

const Failure = () => {
  const url = "http://localhost:5000/goals/histories";

  const [rawDatas, setRawDatas] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const filteredData = res.data.filter((item) => !item.win);
        setRawDatas(filteredData);
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

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-4">
        <FailureForm />
      </div>
      <div className="md:w-3/5">
        <div className="grid grid-cols-2 md:grid-cols- gap-1 mb-4">
          {datas &&
            datas.map((entry) => (
              <div key={entry._id}>
                <AccomFailureCard item={entry} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Failure;
