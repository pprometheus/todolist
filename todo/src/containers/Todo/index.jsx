import { useInjectReducer, useInjectSaga } from "redux-injectors";
import reducer from "./reducer";
import saga from "./saga";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "./selectors";
import { addTask, deleteTask, toggleStatus } from "./actions";
import Todo from "../../components/Todo/todo";

function TaskContainer(){
    useInjectReducer({ key: "task", reducer });
    useInjectSaga({ key: "task", saga });


  const dispatch = useDispatch();
  const taskData = useSelector(selectTasks);

  const handleAddTask = (taskName) => dispatch(addTask(taskName));
  const handleDeleteTask = (taskid) => dispatch(deleteTask(taskid));
  const handleToggleTask = (taskid) => dispatch(toggleStatus(taskid));

  return (
    <div>
      <Todo
        taskData={taskData}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
      />
    </div>
  );
}

export default TaskContainer;
