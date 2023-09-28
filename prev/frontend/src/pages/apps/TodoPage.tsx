import React, { useEffect, useState } from "react";
import TodoCreateForm from "../../components/todo/TodoCreateForm";
import TodoDisplayCard from "../../components/todo/TodoDisplayCard";
import TodoSearchCard from "../../components/todo/TodoSearchCard";
import TodoCompletedCard from "../../components/todo/TodoCompletedCard";
import axios from "axios";

function TodoPage() {
  const url = "http://localhost:5000/todolist/";
  const [rawData, setRawData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [toggleFinish, setToggleFinish] = useState([]);
  const [toggleHide, setToggleHide] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setDatas(res.data));
  }, []);

  const fetchData = async () => {};

  const filterAndSortData = () => {};

  const handleSubmit = () => {};

  const handleDelete = () => {};

  const handleFinish = () => {};

  const handleHide = () => {};

  return (
    <div className="flex flex-col md:flex-row px-6">
      <div className="md:w-2/5 p-4">
        <TodoCreateForm handleSubmit={handleSubmit} />
      </div>
      <div className="md:w-3/5 p-4">
        <div className="mb-4">
          <TodoSearchCard handleSearch={() => {}} />
        </div>
        {datas &&
          datas.map((data, index) => (
            <div key={index}>
              {toggleFinish[index] ? (
                <TodoCompletedCard task={data} handleDelete={handleDelete} />
              ) : (
                <TodoDisplayCard
                  task={data}
                  handleFinish={() => handleFinish()}
                  handleDelete={() => handleDelete()}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoPage;
