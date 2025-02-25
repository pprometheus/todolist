import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import map from "lodash/map";
import Header from "../header/Header";
import Input from "../input/Input";
import Button from "../button/Button";
import Card from "../card/Card";
import {
  ADD_TASK,
  DONE_TASK,
  EDIT_TASK,
  FETCH_TODOS,
  REMOVE_TASK,
  SAVE_TASK,
} from "../../container/todoContainer/constants";

const TodoList = ({ todos }) => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_TODOS });

    console.log("Use Effect Called");
  }, []);

  function handleChange(e) {
    setTask(e.target.value);
    
  }

  function addTask() {
    if (task.trim() !== "") {
      dispatch({ type: ADD_TASK, payload: task });

      setTask("");
    }
  }

  console.log("from todolist", todos);

  function deleteTask(taskid) {
    const id = todos[taskid].id;
    console.log("Delete task function called", id);
    dispatch({ type: REMOVE_TASK, payload: id });
  }

  function doneTask(taskid) {
    const id = todos[taskid].id;
    console.log("Done task function called", id);
    dispatch({ type: DONE_TASK, payload: id });
  }

    const [editedTask, setEditedTask] = useState("");
    function handleEditChange(e) {
      setEditedTask(e.target.value);
      console.log(editedTask);
    }
    function editTask(taskid) {
      const id = todos[taskid].id;
      console.log("Edit Task Called");
      dispatch({type:EDIT_TASK,payload:id})
    }
    function saveTask(taskid) {
      const id = todos[taskid].id;
      console.log("saveTask Called",id)

      if (editedTask.trim() !== "") {
        dispatch({ type: SAVE_TASK, id:id, data:editedTask });
      }
    }

  return (
    <>
      <Header title={"my tasks"} className={"justify-center flex"} />
      <div className="items-center justify-center flex gap-4 pb-3">
        <Input
          placeholder={"Enter Task"}
          value={task}
          onChange={handleChange}
          className={"border-1 p-2"}
        />
        <Button
          variant="add"
          onClick={addTask}
          children="Add"
          disabled={task !== "" ? false : true}
        />
      </div>
      <div className="flex justify-center items-center">
        <ul>
          {map(todos, (item, idx) => (  //used lodash map
            <Card
              key={idx}
              todoText={item.taskName}
              status={item.status}
              taskId={idx}
              doneTask={doneTask}
              deleteTask={deleteTask}
              editTask={editTask}
              editable ={item.editable}
              value = {editedTask}
              onChange = {handleEditChange}
              saveTask = {saveTask}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
