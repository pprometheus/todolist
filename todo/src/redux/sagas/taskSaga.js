import { put, takeEvery } from "redux-saga/effects";
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATUS,
  ADD_TASK_SAGA,
  DELETE_TASK_SAGA,
  TOGGLE_TASK_STATUS_SAGA,
} from "../actions/action";

function* addTask(action) {
  try {
    yield put({ type: ADD_TASK, payload: action.payload });
  } catch (err) {
    console.error("An Error Occured while Adding the task", err);
  }
}

function* deleteTask(action) {
  try {
    yield put({ type: DELETE_TASK, payload: action.payload });
  } catch (err) {
    console.error("An Error Occured while deleting the task", err);
  }
}

function* toggleTaskStatus(action) {
  try {
    yield put({ type: TOGGLE_TASK_STATUS, payload: action.payload });
  } catch (err) {
    console.error("An Error Occured while toggling the task status", err);
  }
}

export default function* watchTaskSaga() {
  yield takeEvery(ADD_TASK_SAGA, addTask);
  yield takeEvery(DELETE_TASK_SAGA, deleteTask);
  yield takeEvery(TOGGLE_TASK_STATUS_SAGA, toggleTaskStatus);
}
