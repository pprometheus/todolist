
import { combineReducers } from "redux";
import taskReducer from "./reducers/taskReducer";

const rootReducer=combineReducers({
    task:taskReducer,
})

export default rootReducer;