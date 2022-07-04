import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
