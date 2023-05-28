import React, { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const url = "http://localhost:5000/todolist/";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <>
      <h1>Working??</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} className="py-2">
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
