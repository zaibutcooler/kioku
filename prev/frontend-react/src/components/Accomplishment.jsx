import React, { useState, useEffect } from "react";
import AccomplishForm from "../mini-com/AccomplishForm";
import AccomFailureCard from "../mini-com/AccomFailureCard";
import AccomFailureDetailCard from "../mini-com/AccomFailureDetailCard";
import axios from "axios";

const Accomplishment = () => {
  const url = "http://localhost:5000/goals/histories";

  const [rawDatas, setRawDatas] = useState([]);
  const [datas, setDatas] = useState([]);
  const [toggleDetail, setToggleDetail] = useState(true);
  const [detailId, setDetailId] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const filteredData = res.data.filter((item) => item.win);
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

  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log("Deleted Successfully");
        setDatas(datas.filter((data) => data._id !== id));
      })
      .catch((err) => console.log(err));
  };
  const renderAllCards = () => {
    return (
      <div className="md:w-3/5">
        <div className="grid grid-cols-2 md:grid-cols- gap-1 mb-4">
          {datas &&
            datas.map((entry) => (
              <div
                key={entry._id}
                onClick={() => {
                  setToggleDetail(!toggleDetail);
                  setDetailId(entry._id);
                }}>
                <AccomFailureCard item={entry} />
              </div>
            ))}
        </div>
      </div>
    );
  };

  const renderDetailCard = () => {
    const detailData = datas.find((item) => item._id === detailId);

    return (
      <div className="md:w-3/5 p-4">
        <div className="mb-4">
          {detailData && (
            <AccomFailureDetailCard
              item={detailData}
              handleBack={() => {
                setToggleDetail(true);
              }}
              handleDelete={() => {
                handleDelete(detailData._id);
                setToggleDetail(!toggleDetail);
              }}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-4">
        <AccomplishForm handleSubmit={handleSubmit} />
      </div>
      {toggleDetail ? renderAllCards() : renderDetailCard()}
    </div>
  );
};

export default Accomplishment;
