import { useEffect, useState } from 'react';
import { Alert, AlertTitle, Container, Grid, Typography } from '@mui/material';
import { CartCards, Footer, NavBar } from '../../components';
import { useSelector } from 'react-redux';
import { getProductCart } from '../../state/actions-creators/cart';
import ShoppingSummary from '../../components/ShoppingSummary';

const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const [purchaseAlert, setPurchaseAlert] = useState(false);

  useEffect(() => {
    getProductCart();
  }, []);
  return (
    <>
      <NavBar position="relative" color="inherit" storeLogo />
      <Container maxWidth="lg" sx={{ minHeight: '700px' }}>
        <Typography variant="h4" marginBottom={2}>
          Cart
        </Typography>
        {purchaseAlert && (
          <Alert severity="success" sx={{ mb: 2 }}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Success</AlertTitle>
            Items purchase successful
          </Alert>
        )}
        {!cart.length ? (
          <Typography>Your Cart is Empty</Typography>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <CartCards />
            </Grid>
            <Grid item xs={0} md={4}>
              <ShoppingSummary setAlert={setPurchaseAlert} />
            </Grid>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
