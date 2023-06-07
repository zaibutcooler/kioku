import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import TaskCard from "../mini-com/TaskCard";
import SearchCard from "../mini-com/SearchCard";
import CompletedTaskCard from "../mini-com/CompletedTaskCard";
import axios from "axios";

function CreateTodoPage() {
  const url = "http://localhost:5000/todolist/";
  const [rawData, setRawData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [toggleFinish, setToggleFinish] = useState([]);
  const [toggleHide, setToggleHide] = useState([]);

  useEffect(() => {
    fetchData();
  }, [showAll]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const formattedData = response.data.map((data) => {
        const formattedDateTime = new Date(data.dueDate).toLocaleString(
          "en-GB",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }
        );
        return {
          ...data,
          dueDate: formattedDateTime,
        };
      });
      setRawData(formattedData);
      filterAndSortData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  const filterAndSortData = (data) => {
    if (!showAll) {
      const filterIncomplete = data
        .filter((item) => !item.completed)
        .sort((a, b) => b.created.localeCompare(a.created));
      setDatas(filterIncomplete);
      setToggleFinish(new Array(filterIncomplete.length).fill(false));
    }
    if (showAll) {
      const filterIncomplete = data.sort((a, b) =>
        b.created.localeCompare(a.created)
      );
      setDatas(filterIncomplete);
      setToggleFinish(new Array(filterIncomplete.length).fill(false));
    }
  };

  const handleSubmit = (formData) => {
    axios
      .post(url, formData)
      .then((res) => {
        console.log("Created successfully");
        const updatedData = [res.data, ...rawData];
        setRawData(updatedData);
        filterAndSortData(updatedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log("Succeed Deleting");
        const updatedData = rawData.filter((data) => data._id !== id);
        setRawData(updatedData);
        filterAndSortData(updatedData);
      })
      .catch((error) => console.log(error));
  };

  const handleFinish = (id, index) => {
    axios
      .patch(`${url}/${id}`, {
        completed: true,
        completedDate: Date.now(),
      })
      .then((res) => {
        console.log("Task completed successfully");
        const updatedData = datas.filter((data, i) => i !== index);
        setDatas(updatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHide = (id) => {
    const updatedToggleFinish = toggleFinish.map((value, index) =>
      index === id ? false : value
    );
    setToggleFinish(updatedToggleFinish);
  };

  return (
    <div className="flex flex-col md:flex-row px-6">
      <div className="md:w-2/5 p-4">
        <button onClick={() => setShowAll(!showAll)}>Show All</button>
        <Todo handleSubmit={handleSubmit} />
      </div>
      <div className="md:w-3/5 p-4">
        <div className="mb-4">
          <SearchCard />
        </div>
        {datas &&
          datas.map((data, index) => (
            <div key={data._id}>
              {data.completed ? (
                <CompletedTaskCard
                  task={data}
                  handleDelete={() => handleDelete(data._id)}
                />
              ) : (
                <TaskCard
                  task={data}
                  handleFinish={() => handleFinish(data._id, index)}
                  handleDelete={() => handleDelete(data._id)}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default CreateTodoPage;
