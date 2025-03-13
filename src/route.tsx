import { Routes, Route } from 'react-router-dom';
import UserList from './pages/user/userList';
import Dashboard from './pages/dashboard/page';

export const Router = () => {
  

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/users" element={<UserList/>} />
    </Routes>
  );
};
