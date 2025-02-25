// import { ADD_TASK,ADD_TASK_SAGA,DONE_TASK,DONE_TASK_SAGA,REMOVE_TASK, REMOVE_TASK_SAGA } from "../actions/actions";
// import {put, takeEvery} from "redux-saga/effects"

// function* addTask (action){
//     yield put({type:ADD_TASK,payload:action.payload})
// }

// function* doneTask (action) {
//     yield put({type:DONE_TASK,payload:action.payload})
// }

// function* removeTask (action) {
//     yield put({type:REMOVE_TASK,payload:action.payload})
// }

// export function* todos() {
//     yield takeEvery(ADD_TASK_SAGA,addTask)
//     yield takeEvery(DONE_TASK_SAGA,doneTask)
//     yield takeEvery(REMOVE_TASK_SAGA,removeTask)

// }

// // export {addTask,doneTask,removeTask};