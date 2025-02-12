import { useState } from "react";

function App() {
  const [task, setTask] = useState({ task: "", status: "false" });
  const [taskList, setTasklist] = useState([]);
  function addTask() {
    const completed = "false";
    if (task != "") {
      setTasklist((prevTask) => [...prevTask, task]);
      setTask("");
    }
  }

  console.log(taskList);
  // console.log(task);

  function handleChange(e) {
    setTask({ task: e.target.value, status: false });
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
      <div className="items-center justify-center flex">
        <div className="mt-6">
          <input
            className="border-1 p-2"
            type="text"
            name=""
            id=""
            value={task.task}
            placeholder="Enter task"
            onChange={handleChange}
          />
          <button
            className="border-1 rounded-sm bg-yellow-500 text-white border-gray-500 p-2 hover:cursor-pointer ml-2"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>

      <div className="justify-center items-center w-[80%] ml-auto mr-auto mt-2 px-6 ">
        {taskList.map((item, idx) => (
          <ul key={idx} className="">
            <li className="py-2  shadow-lg bg-blue-300 px-4 rounded-sm mb-2 flex justify-between">
              <div className={`${item.status ? "line-through" : ""}`}>
                {item.task}
              </div>
              <div className="group relative ">
                <button
                  className="border-1 px-2 py-1 bg-green-500 text-white rounded-lg  ml-11 hover:cursor-pointer invisible group-hover:visible "
                  onClick={() => {
                    doneTask(idx);
                  }}
                >
                  {item.status == true ? "Undo" : "Done"}
                </button>
                <button
                  className="border-1 px-2 py-1 bg-red-500 text-white rounded-lg ml-2 hover:cursor-pointer invisible group-hover:visible"
                  onClick={() => {
                    deleteTask(idx);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
