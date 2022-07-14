import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Product, TopColor } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route index element={<TopColor />} />
          <Route path="topColor" element={<TopColor />} />
          <Route path="*" element={<TopColor />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
