import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterScrollToTop from '../components/RouterScrollToTop';
import { Home, Login, Register, Product, TopColorMetallic, DanaglossNC } from '../pages';
import Cart from '../pages/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <RouterScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/topColorMetallic" element={<TopColorMetallic />} />
          <Route path="/product/danaglossNC" element={<DanaglossNC />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </RouterScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
