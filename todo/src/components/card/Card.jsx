import React from "react";
import Button from "../button/Button";

const Card = ({
  todoText,
  taskId,
  status,
  doneTask,
  deleteTask,
  editTask,
  editable,
  onChange,
  saveTask
}) => (
  <li
    data-testid="card"
    className="block py-4 shadow-lg bg-blue-300 px-8 rounded-sm mb-4 flex justify-between items-center gap-12 w-full max-w-4xl group hover:bg-blue-400"
  >
    <div className={`flex ${status ? "line-through" : ""}`}>
      <p className="text-xl">{taskId + 1}.</p>
      {editable ? (
        <div className="pl-6 text-xl" contentEditable>
          <input type="text" onChange={onChange} placeholder={todoText}></input>
        </div>
      ) : (
        <div className="pl-6 text-xl">{todoText}</div>
      )}
    </div>

    {editable ? (
      <div className="relative flex gap-4 mt-2 invisible group-hover:visible">
        <Button onClick={()=>saveTask(taskId)}>Save</Button>
        <Button onClick={() => editTask(taskId)}>Cancel </Button>
      </div>
    ) : (
      <div className="relative flex gap-4 mt-2 invisible group-hover:visible">
        <Button
          variant={status ? "undo" : "done"}
          onClick={() => doneTask(taskId)}
          className="border-1 px-6 py-2 text-white rounded-lg"
        >
          {status ? "Undo" : "Done"}
        </Button>
        <Button
          variant="remove"
          onClick={() => deleteTask(taskId)}
          className="border-1 px-6 py-2 bg-red-500 text-white rounded-lg hover:cursor-pointer"
        >
          Remove
        </Button>
        {/* <Button variant="edit" onClick={() => editTask(taskId)}>
          Edit
        </Button> */}
      </div>
    )}
  </li>
);

export default Card;
