import { Routes, Route } from 'react-router-dom';

import Layout from "./Layout";
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import Register from '../pages/Register';
import Login from '../pages/Login';

function App() {
  return (
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
