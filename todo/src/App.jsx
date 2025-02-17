import { useState } from "react";
import Button from "../src/components/button/Button";
import Input from "../src/components/input/Input";
import Card from "../src/components/card/Card";
import Header from "../src/components/header/Header";

function App() {
  const [task, setTask] = useState(""); //false is boolean
  const [taskList, setTasklist] = useState([]);

  function addTask() {
    // const completed = "false";
    if (task != "") {
      //task.task we are checking task -> object
      setTasklist((prevTask) => [
        ...prevTask,
        {
          taskName: task,
          status: false,
        },
      ]);
      setTask(""); //setting the object to empty string ?? revert to original state or null
    }
  }

  console.log("Task", taskList);

  // console.log(taskList);
  // console.log(task);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function deleteTask(taskid) {
    // console.log(taskid);
    const filteredTasks = taskList.filter((_, id) => id !== taskid);
    setTasklist(filteredTasks);
    // console.log(taskList);
  }

  function doneTask(taskid) {
    setTasklist((prevTasks) =>
      prevTasks.map((task, idx) =>
        idx === taskid ? { ...task, status: !task.status } : task
      )
    );
  }

  return (
    <>
      <Header title={"TODO List"} className={"justify-center flex"} />
      <div className="items-center justify-center flex">
        <Input
          placeholder={"Enter Task"}
          value={task}
          onChange={handleChange}
          className={"border-1 p-2"}
        />
        <Button variant="add" onClick={addTask} children="Add" />
      </div>
      <div className="flex justify-center items-center">
        <ul>
          {taskList.map((item, idx) => (
            <Card
              key={idx}  //not defined in props but required by our map() to map
              todoText={item.taskName}
              status={item.status}
              taskId={idx}
              doneTask={doneTask}
              deleteTask={deleteTask}
            ></Card>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
