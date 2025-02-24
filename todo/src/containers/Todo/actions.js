import {
  ADD_TASK_SAGA,
  DELETE_TASK_SAGA,
  TOGGLE_TASK_STATUS_SAGA,
} from "./constants";

export function addTask(payload) {
  return {
    type: ADD_TASK_SAGA,
    payload,
  };
}

export function deleteTask(payload) {
  return {
    type: DELETE_TASK_SAGA,
    payload,
  };
}

export function toggleStatus(payload) {
  return {
    type: TOGGLE_TASK_STATUS_SAGA,
    payload,
  };
}
