import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Login from '@/pages/login';
import { useSelector } from 'react-redux';

export const Router = () => {
  const token = useSelector((state) => state.user.token);

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path="/dashboard" element={<App />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
