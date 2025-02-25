import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import { fetchData, stringifyData } from "../../helper/helper";
import {
  ADD_TASK,
  DONE_TASK,
  REMOVE_TASK,
  STORE_TODOS,
  FETCH_TODOS,
  EDIT_TASK,
  SAVE_TASK,
} from "./constants";

const API_URL = "http://localhost:3001";

function* getTodos() {
  let data = yield call(fetchData, `${API_URL}/todos`);
  console.log("getTodos Saga called", data);
  yield put({ type: STORE_TODOS, data });
}

function* insertTask(action) {
  console.warn("insertTask called", action.payload);
  yield call(fetchData, `${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringifyData({
      id: action.id,
      taskName: action.payload,
      status: false,
      editable: false,
    }),
  });
  yield call(getTodos);
}

function* deleteTask(action) {
  console.log("delete task called", action.payload);
  yield call(fetchData, `${API_URL}/todos/${action.payload}`, {
    method: "DELETE",
  });

  yield call(getTodos);
}

function* toggleTask(action) {
  console.log("Toggle Task function called");
  let task = yield call(fetchData, `${API_URL}/todos/${action.payload}`);
  const updatedStatus = !task.status;
  console.log("Fetched task and status", action.payload);

  yield call(fetch, `${API_URL}/todos/${action.payload}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringifyData({ status: updatedStatus }),
  });

  yield call(getTodos);
}

function* editTask(action) {
  console.log("edit task function called");
  let task = yield call(fetchData, `${API_URL}/todos/${action.payload}`);
  const updatedEditable = !task.editable;
  console.log("Fetched task and editable status", action.payload);

  yield call(fetch, `${API_URL}/todos/${action.payload}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringifyData({ editable: updatedEditable }),
  });

  yield call(getTodos);
}

function* saveTask(action) {
  console.log("save task function called",action.data,action.id);
 
  yield call(getTodos);
}

export default function* todoSaga() {
  yield takeLatest(ADD_TASK, insertTask);
  yield takeLatest(REMOVE_TASK, deleteTask);
  yield takeLatest(DONE_TASK, toggleTask);
  yield takeLatest(FETCH_TODOS, getTodos);
  yield takeEvery(EDIT_TASK, editTask);
  yield takeEvery(SAVE_TASK, saveTask);

}
