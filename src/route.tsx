import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import LogIn from '@/pages/login'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/dashboard" element={<App />} />
           <Route path="/" element={<LogIn />} />
        </Routes>
    </BrowserRouter>
  )
}
