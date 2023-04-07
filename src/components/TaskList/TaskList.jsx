import { useSelector } from 'react-redux';

// import { selectAllTasks } from '../../redux/tasks/selectors';
import { selectAllTasks } from '../../redux/tasks/slice';

import Task from '../Task';

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
