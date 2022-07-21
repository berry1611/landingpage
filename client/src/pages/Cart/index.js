import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { CartCards, Footer, NavBar } from '../../components';
import { useSelector } from 'react-redux';
import { getProductCart } from '../../state/actions-creators/cart';
import ShoppingSummary from '../../components/ShoppingSummary';

const Cart = () => {
  const { cart } = useSelector((state) => state.products);

  useEffect(() => {
    getProductCart();
  }, []);
  return (
    <>
      <NavBar position="relative" color="inherit" />
      <Container maxWidth="lg" sx={{ minHeight: '700px' }}>
        <Typography variant="h4" marginBottom={2}>
          Cart
        </Typography>
        {!cart.length ? (
          <Typography>Your Cart is Empty</Typography>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <CartCards />
            </Grid>
            <Grid item xs={0} md={4}>
              <ShoppingSummary />
            </Grid>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
