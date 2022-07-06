import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavBar, Footer } from '../../components';
import Jumbotron from './Jumbotron';
import About from './About';
import ProductBrand from './ProductBrand';
import ProductHighlights from './ProductHighlights';
import { getProducts } from '../../state/actions-creators/product';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(12));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Jumbotron />
      <About />
      <ProductBrand />
      <ProductHighlights />
      <Footer />
    </>
  );
};

export default Home;
