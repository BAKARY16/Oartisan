import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Client/Home';
import Login from '../pages/Client/Login';
import Register from '../pages/Client/Register';

const ClientRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default ClientRoutes;