import { ADD_TASK, DELETE_TASK, TOGGLE_TASK_STATUS } from "../actions/action.js";

const initialState = {
  taskList: [],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [
          ...state.taskList,
          { taskName: action.payload, status: false }
        ]
      };
    
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((_, id) => id !== action.payload)
      };

    case TOGGLE_TASK_STATUS:
      return {
        ...state,
        taskList: state.taskList.map((task, idx) =>
          idx === action.payload ? { ...task, status: !task.status } : task
        )
      };

    default:
      return state;
  }
}

export default taskReducer;
