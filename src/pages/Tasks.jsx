import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading } from '../redux/tasks/selectors';
import { fetchTasks } from '../redux/tasks/operations';

import TaskEditor from '../components/TaskEditor';
import TaskList from '../components/TaskList';

const Todos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <h1>Your tasks</h1>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
};

export default Todos;
