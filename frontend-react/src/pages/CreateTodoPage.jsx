import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import TaskCard from "../mini-com/TaskCard";
import SearchCard from "../mini-com/SearchCard";
import CompletedTaskCard from "../mini-com/CompletedTaskCard";
import axios from "axios";
import fetchData from "../hooks/fetchData";

function CreateTodoPage() {
  const url = "http://localhost:5000/todolist/";

  const [datas, setDatas] = useState([]);
  const [toggleFinish, setToggleFinish] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todolist/");
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
      setDatas(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (formData) => {
    axios
      .post(url, formData)
      .then((res) => {
        console.log("Created successfully");
        const updatedData = [...datas, res.data];
        setDatas(updatedData);
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
        const updatedData = datas.filter((data) => data._id !== id);
        setDatas(updatedData);
      })
      .catch((error) => console.log(error));
  };

  const handleFinish = (id, index) => {
    const updatedData = [...toggleFinish];
    updatedData[index] = false;
    setToggleFinish(updatedData);
  };

  const handleHide = () => {};

  return (
    <div className="flex flex-col md:flex-row px-6">
      <div className="md:w-2/5 p-4">
        <Todo handleSubmit={handleSubmit} />
      </div>
      <div className="md:w-3/5 p-4">
        <div className="mb-4">
          <SearchCard />
        </div>
        {/* <TaskList tasks={datas} /> */}
        {datas &&
          datas.map((data, index) => (
            <div key={data._id}>
              {toggleFinish[index] ? (
                <TaskCard
                  task={data}
                  handleFinish={() => handleFinish(data._id, index)}
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
