import { useDispatch } from 'react-redux';

import { deleteTask } from '../../redux/tasks/operations';

const Task = ({ id, text }) => {
  const dispatch = useDispatch();
  const onDeleteTask = () => dispatch(deleteTask(id));

  return (
    <li>
      <p>{text}</p>
      <button onClick={onDeleteTask}>Delete</button>
    </li>
  );
};

export default Task;
