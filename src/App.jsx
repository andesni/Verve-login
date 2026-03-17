import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordState from './pages/ForgotPasswordState';
import ResetPassword from './pages/ResetPassword';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forgotpasswordstate" element={<ForgotPasswordState />} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App