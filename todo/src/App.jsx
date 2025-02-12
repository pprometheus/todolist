import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTasklist] = useState([]);
  function addTask() {
    setTasklist((prevTask) => [...prevTask, task]);
    setTask("");
  }

  // console.log(taskList);
  // console.log(task);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function deleteTask(taskid) {
    console.log(taskid);
    const filteredTasks = taskList.filter((_, id) => id !== taskid);
    setTasklist(filteredTasks);
    console.log(taskList);
  }

  return (
    <>
      <div className="items-center justify-center flex">
        <div>
          <input
            className="border-2 p-2"
            type="text"
            name=""
            id=""
            value={task}
            placeholder="Enter task"
            onChange={handleChange}
          />
          <button className="border-2 p-2" onClick={addTask}>
            Add
          </button>
        </div>
      </div>

      <div className="justify-center items-center">
        {taskList.map((item, idx) => (
          <ul key={idx} className="">
            <li className="py-2 border-1 shadow-lg bg-blue-300">
              {item}
              <button className="border-1 px-2 py-1 bg-green-500 text-white rounded-lg  ml-11">
                Done
              </button>
              <button
                className="border-1 px-2 py-1 bg-red-500 text-white rounded-lg ml-2"
                onClick={() => {
                  deleteTask(idx);
                }}
              >
                Remove
              </button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
