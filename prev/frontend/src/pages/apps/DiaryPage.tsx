import React from "react";
import { useState, useEffect } from "react";
import DiaryCreateForm from "../../components/diary/DiaryCreateForm";
import axios from "axios";
import DiaryDetailCard from "../../components/diary/DiaryDetailCard";

const DiaryPage = () => {
  const url = "http://localhost:5000/goals/diary";

  const [toggleDetail, setToggleDetail] = useState(true);
  const [datas, setDatas] = useState([]);
  const [detailId, setDetailId] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data.sort((a, b) => b.created.localeCompare(a.created)));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {};

  // const formatDate = (dateString: Date) => {
  //   const options = { year: "numeric", month: "long", day: "numeric" };
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString(undefined, options);
  // };

  const renderAllCards = () => {
    return (
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/5 p-4">
          <DiaryCreateForm handleSubmit={handleSubmit} />
        </div>
        <div className="md:w-2/5 p-4">
          <div className="mb-4">
            {datas &&
              datas.map((entry: any) => (
                <div
                  key={entry.id}
                  onClick={() => {
                    setDetailId(entry._id);
                    setToggleDetail(!toggleDetail);
                  }}
                  className="flex flex-col mb-4 bg-white rounded-lg shadow-md p-4 cursor-pointer">
                  <h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-500 transition-colors duration-300 mb-4">
                    {entry.title}
                  </h2>
                  <p className="text-gray-500">{entry.created}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  const renderDetailCard = () => {
    const detailData = datas.find((item) => item._id === detailId);

    return (
      <div>
        {detailData && (
          <DiaryDetailCard
            diary={detailData}
            handleBack={() => setToggleDetail(!toggleDetail)}
          />
        )}
      </div>
    );
  };

  return <div>{toggleDetail ? renderAllCards() : renderDetailCard()}</div>;
};

export default DiaryPage;
