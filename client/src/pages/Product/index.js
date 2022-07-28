import { CategoryCards, Footer, NavBar } from '../../components';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsCategory } from '../../state/actions-creators/product';

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCategory());
  }, []);

  return (
    <>
      <NavBar position="relative" color="inherit" searchBar />
      <Container maxWidth="xl" sx={{ mt: 4, minHeight: '100vh' }}>
        <CategoryCards />
      </Container>
      <Footer />
    </>
  );
};

export default Product;
