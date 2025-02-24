import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATUS,
  ADD_TASK_SAGA,
  DELETE_TASK_SAGA,
  TOGGLE_TASK_STATUS_SAGA,
} from "./constants";

function* addTask(action) {
  try {
    console.log("Add task saga called")
    yield put({ type: ADD_TASK, payload: action.payload });
  } catch (err) {
    console.error("An error occurred while adding the task", err);
  }
}

function* deleteTask(action) {
  try {
    yield put({ type: DELETE_TASK, payload: action.payload });
  } catch (err) {
    console.error("An error occurred while deleting the task", err);
  }
}

function* toggleTaskStatus(action) {
  try {
    yield put({ type: TOGGLE_TASK_STATUS, payload: action.payload });
  } catch (err) {
    console.error("An error occurred while toggling the task status", err);
  }
}

export function* watchTaskSaga() {
  yield takeEvery(ADD_TASK_SAGA, addTask);
  yield takeEvery(DELETE_TASK_SAGA, deleteTask);
  yield takeEvery(TOGGLE_TASK_STATUS_SAGA, toggleTaskStatus);
}

export default function* saga() {
  yield all([fork(watchTaskSaga)]);
}
