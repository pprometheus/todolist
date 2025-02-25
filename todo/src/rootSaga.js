import { all } from 'redux-saga/effects';
import todoSaga from "./container/todoContainer/saga";

export function* rootSaga() {
    yield all([
        todoSaga()
    ])
}