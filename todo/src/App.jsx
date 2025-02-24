import { useState } from "react";
import Button from "../src/components/button/Button";
import Input from "../src/components/input/Input";
import Card from "../src/components/card/Card";
import Header from "../src/components/header/Header";
import useTaskContainer from "./containers/Todo";

function App() {
  const [task, setTask] = useState("");
  const { taskData, handleAddTask, handleDeleteTask, handleToggleTask } = useTaskContainer();

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
    <>
      <Header title={"TODO List"} className={"justify-center flex"} />
      <div className="items-center justify-center flex gap-2">
        <Input
          placeholder={"Enter Task"}
          value={task}
          onChange={handleChange}
          className={"border-1 p-2"}
        />
        <Button variant="add" onClick={addTaskfun} children="Add" />
      </div>
      <div className="flex justify-center items-center mt-4">
        <ul>
          {taskData?.map((item, idx) => (
            <Card
              // key={idx} //not defined in props but required by our map() to map
              todoText={item.taskName}
              status={item.status}
              taskId={idx}
              doneTask={doneTask}
              deleteTask={deleteTaskfun}
            ></Card>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
