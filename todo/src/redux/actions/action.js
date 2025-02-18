export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
export const ADD_TASK_SAGA = 'ADD_TASK_SAGA';
export const DELETE_TASK_SAGA = 'DELETE_TASK_SAGA';
export const TOGGLE_TASK_STATUS_SAGA = 'TOGGLE_TASK_STATUS_SAGA';


export const addTask = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
});

export const toggleTaskStatus = (payload) => ({
  type: TOGGLE_TASK_STATUS,
  payload,
});
