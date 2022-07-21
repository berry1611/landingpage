import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Product, TopColorMetallic, Danagloss } from '../pages';
import Cart from '../pages/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/topColorMetallic" element={<TopColorMetallic />} />
        <Route path="/product/danagloss" element={<Danagloss />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
