import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Card from "../card/Card";
import Header from "../header/Header";
import { map } from "lodash";

function Todo({ taskData, handleAddTask, handleDeleteTask, handleToggleTask }) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTaskfun() {
    if (task.trim() !== "") {
      handleAddTask(task);
      setTask("");
    }
  }

  function deleteTaskfun(taskid) {
    handleDeleteTask(taskid);
  }

  function doneTask(taskid) {
    handleToggleTask(taskid);
  }

  return (
    <div>
      <Header title="TODO List" className="justify-center flex" />
      <div className="items-center justify-center flex gap-2">
        <Input
          placeholder="Enter Task"
          value={task}
          onChange={handleChange}
          className="border-1 p-2"
        />
        <Button variant="add" onClick={addTaskfun}>
          Add
        </Button>
      </div>
      <div className="flex justify-center items-center mt-4">
        <ul>
          {map(taskData, (item, idx) => (
            <Card
              key={idx}
              todoText={item.taskName}
              status={item.status}
              taskId={idx}
              doneTask={doneTask}
              deleteTask={deleteTaskfun}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
