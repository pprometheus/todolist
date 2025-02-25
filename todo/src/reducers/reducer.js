// import { ADD_TASK, DONE_TASK, REMOVE_TASK } from "../actions/actions";

// const initialState = {
//   tasks: [],
// };

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return { ...state, tasks: [...state.tasks, {
//         taskName:action.payload,
//         status:false //had missed
//     }
//     ] };
//     case DONE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.map((item, idx) => 
//           idx === action.payload ? { ...item, status: !item.status } : item//i was returning tasks instead of item
//         ),
//       };
//     case REMOVE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.filter((_,idx) => idx !== action.payload), //filter syntax was wrong
//       };
//     default:
//       return state;
//   }
// };

// export default todoReducer;
