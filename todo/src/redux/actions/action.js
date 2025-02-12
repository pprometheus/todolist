import { createAction } from "@reduxjs/toolkit";

// Define actions
export const addTask = createAction("addTask");
export const deleteTask = createAction("deleteTask");
export const toggleTaskStatus = createAction("toggleTaskStatus");
