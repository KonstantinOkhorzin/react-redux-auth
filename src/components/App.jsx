import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './Layout';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import Register from '../pages/Register';
import Login from '../pages/Login';

import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Loading...</b>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='tasks' element={<Tasks />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
