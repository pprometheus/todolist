import { produce } from "immer";
import { STORE_TODOS } from "./constants";

export const initialState = {}; // Keeping state as an array

const sagaReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case STORE_TODOS:
        draft.todos = action.data;
        break;
      default:
        return state;
    }
  });

// case ADDED_TASK:
//   console.log("added task called")
//   return {...state, todos:action.payload};

// case REMOVED_TASK:
//   return state.filter((_, idx) => idx !== action.payload); // Directly filtering state array

// case FINISHED_TASK:
//   return state.map((item, idx) =>
//     idx === action.payload ? { ...item, status: !item.status } : item
//   );

export default sagaReducer;
