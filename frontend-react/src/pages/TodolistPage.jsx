import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import axios from "axios";
import fetchData from "../hooks/fetchData";

function TodoList() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/todolist/")
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        {datas &&
          datas.map((data) => (
            <div key={data._id} className="ml-4">
              {data.title}
            </div>
          ))}
      </div>
    </>
  );
}

export default TodoList;
