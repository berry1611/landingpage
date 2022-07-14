import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CategoryCards, NavBar, ProductCards } from '../../components';
import { AppBar, Toolbar, Typography, Container, Divider, Grid } from '@mui/material';
import { TOP_COLOR_MET, DANAGLOSS } from '../../constant/productCode';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../state/actions-creators/product';

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar position="relative" color="inherit" searchBar />
      {/* <AppBar position="relative" color="primary">
        <Container maxWidth="xl">
          <Toolbar></Toolbar>
        </Container>
      </AppBar> */}
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <CategoryCards />
      </Container>
    </>
  );
};

export default Product;
