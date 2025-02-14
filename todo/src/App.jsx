import { useState } from "react";
import { toggleTaskStatus ,addTask,deleteTask} from "./redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [task, setTask] = useState("");
  const dispatch=useDispatch();

  function addTaskfun() {
    if (task != "") {
      dispatch(addTask(task));
      setTask("");
    }
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  function deleteTaskfun(taskid) {
    dispatch(deleteTask(taskid))
  }

  function doneTask(taskid) {
    dispatch(toggleTaskStatus(taskid));
  }
  const taskList=useSelector((state)=>state?.tasks?.taskList);

  return (
    <>
      <div className="items-center justify-center flex">
        <div className="mt-6">
          <h1 className="text-4xl mb-2"> TODO List</h1>

          <input
            className="border-1 p-2"
            type="text"
            name=""
            id=""
            value={task}
            placeholder="Enter task"
            onChange={handleChange}
          />
          <button
            className="border-1 rounded-sm bg-yellow-500 text-white border-gray-500 p-2 hover:cursor-pointer ml-2"
            onClick={addTaskfun}
          >
            Add
          </button>
        </div>
      </div>

      <div className="justify-center items-center w-[40%] ml-auto mr-auto mt-2 px-6 ">
        {taskList?.map((item, idx) => (
          <ul key={idx} className="">
            <li className="py-2  shadow-lg bg-blue-300 px-4 rounded-sm mb-2 flex justify-between">
              <div className={item.status ? "line-through flex" : "flex"}>
                <p>{idx + 1}.</p>
                <div className="pl-2">{item.taskName}</div>
              </div>

              <div className="group relative pl-38 ">
                <button
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
                >
                  {item.status == true ? "Undo" : "Done"}
                </button>
                <button
                  className="border-1 px-2 py-1 bg-red-500 text-white rounded-lg ml-2 hover:cursor-pointer invisible group-hover:visible"
                  onClick={() => {
                    deleteTaskfun(idx);
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
