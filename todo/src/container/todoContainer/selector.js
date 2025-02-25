import {createSelector} from'reselect'
import { initialState } from './reducer';

const selectTasks = (state)=> state || initialState
// console.log(selectTasks);
const selectTodo=createSelector(selectTasks,(state)=>state?.todos);
// console.log(selectTodo);

export {selectTasks,selectTodo};