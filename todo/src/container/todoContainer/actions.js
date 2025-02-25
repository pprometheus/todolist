import { ADD_TASK, FETCH_TODOS, DONE_TASK, REMOVE_TASK, EDIT_TASK, SAVE_TASK } from "./constants";

export const fetchTodos = () => {
  console.warn("FETCH_TODOS Called");
  return {
    type: FETCH_TODOS,
  };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    data: task,
  };
};

export const doneTask = (id) => {
  return {
    type: DONE_TASK,
    data: id,
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    data: id,
  };
};

export const editTask = (id) => {
  return {
    type: EDIT_TASK,
    data: id,
  };
};

export const saveTask = (id) => {
  return {
    type: SAVE_TASK,
    id: id,
    data

  };
};
