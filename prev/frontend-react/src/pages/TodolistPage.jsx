import React from "react";
import { Link } from "react-router-dom";

const TodolistPage = () => {
  return (
    <div>
      <Link to="/create-todo">Create Todo list</Link>
    </div>
  );
};

export default TodolistPage;
