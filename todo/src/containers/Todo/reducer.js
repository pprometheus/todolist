import { ADD_TASK, DELETE_TASK, TOGGLE_TASK_STATUS } from "./constants";
import { produce } from "immer";

export const initialState = {
  taskList: [],
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_TASK:
        draft.taskList.push({
          taskName: action.payload,
          status: false,
        });
        return;

      case DELETE_TASK:
        draft.taskList = draft.taskList.filter((_, id) => id != action.payload);
        return;

      case TOGGLE_TASK_STATUS:
        if (draft.taskList[action.payload]) {
          draft.taskList[action.payload].status =
            !draft.taskList[action.payload].status;
        }
        return;

      default:
        return state;
    }
  });
export default reducer;
