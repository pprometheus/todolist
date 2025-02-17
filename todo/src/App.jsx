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
      <Button
        onClick={addTask}
        className={
          "border-1 rounded-sm bg-yellow-500 text-white border-gray-500 p-2 hover:cursor-pointer ml-2" 
        }
        children={"Add"}
      />
      </div>
    <div className="flex justify-center items-center"> 
    <Card className={"border-0 shadow-none"}>
        {taskList.map((item, idx) => (
          <ul key={idx} className="">
            <li className="py-2  shadow-lg bg-blue-300 px-4 rounded-sm mb-2 flex justify-between">
              <div className={item.status ? "line-through flex" : "flex"}>
                <p>{idx + 1}.</p>
                <div className="pl-2">{item.taskName}</div>
              </div>

              <div className="group relative pl-38 ">
                <Button
                  className={`${item.status ? " bg-blue-500" : " bg-green-500"}
                  border-1
                  px-2
                  py-1
                  text-white
                  rounded-lg
                  ml-11
                  hover:cursor-pointer
                  invisible
                  group-hover:visible`}
                  onClick={() => {
                    doneTask(idx);
                  }}
                  children={item.status == true ? "Undo" : "Done"}
                />
                <Button
                  className={
                    "border-1 px-2 py-1 bg-red-500 text-white rounded-lg ml-2 hover:cursor-pointer invisible group-hover:visible"
                  }
                  onClick={() => {
                    deleteTask(idx);
                  }}
                  children={"Remove"}
                />
              </div>
            </li>
          </ul>
        ))}
      </Card>
    </div>
    </>
  );
}

export default App;
