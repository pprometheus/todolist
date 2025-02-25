import { useSelector } from "react-redux";
import { selectTodo } from "./selector";
import React from "react";
import TodoList from "../../components/todolist/todolist";
//import component and pass the todolist as a prop

const TodoContainer = () => {
  const todoList = useSelector(selectTodo);

//   console.log("Todo List", todoList);
  return <TodoList todos={todoList} />;
};

export default TodoContainer;
