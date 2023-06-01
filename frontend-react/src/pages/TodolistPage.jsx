import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import axios from "axios";

function TodoList() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/todolist/")
    //   .then((res) => setDatas(res.data))
    //   .catch((err) => {
    //     console.log(err);
    //   });

    fetch("http://localhost:5000/todolist/")
      .then((res) => res.json)
      .then((data) => setDatas(data));
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
