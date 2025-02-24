import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectTaskDomain = (state) => state?.task || initialState;
const selectTasks = createSelector(
  selectTaskDomain,
  (state) => state?.taskList
);

export { selectTaskDomain, selectTasks };
