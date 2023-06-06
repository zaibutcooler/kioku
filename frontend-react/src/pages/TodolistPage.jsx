import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import TaskCard from "../mini-com/TaskCard";
import SearchCard from "../mini-com/SearchCard";
import CompletedTaskCard from "../mini-com/CompletedTaskCard";
import axios from "axios";
import fetchData from "../hooks/fetchData";

function TodolistPage() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todolist/")
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-6">
      <div className="md:w-2/5 p-4">
        <Todo />
      </div>
      <div className="md:w-3/5 p-4">
        <div className="mb-4">
          <SearchCard />
        </div>
        {/* <TaskList tasks={datas} /> */}
        <TaskCard />
        <CompletedTaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default TodolistPage;
