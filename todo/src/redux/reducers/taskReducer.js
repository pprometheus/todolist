import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleTaskStatus } from "../actions/action.js";

const initialState = {
  taskList: [],
};

const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.taskList.push({
        taskName: action.payload,
        status: false,
      });
    })
    .addCase(deleteTask, (state, action) => {
      state.taskList = state.taskList.filter((_, id) => id !== action.payload);
    })
    .addCase(toggleTaskStatus, (state, action) => {
      state.taskList = state.taskList.map((task, idx) =>
        idx === action.payload ? { ...task, status: !task.status } : task
      );
    });
});

export default taskReducer;
