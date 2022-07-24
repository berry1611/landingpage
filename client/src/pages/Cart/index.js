import { useEffect, useState } from 'react';
import { Alert, AlertTitle, Box, Button, Container, Grid, Typography } from '@mui/material';
import { CartCards, NavBar, ShoppingSummary, ShoppingSummaryDrawer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getProductCart } from '../../state/actions-creators/cart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const [purchaseAlert, setPurchaseAlert] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductCart();
  }, []);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleBuy = () => {
    dispatch(clearCart());
    setPurchaseAlert(true);
  };

  return (
    <>
      <NavBar position="relative" color="inherit" storeLogo />
      <Container maxWidth="lg" sx={{ minHeight: '100vh', pb: 15 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          Cart
        </Typography>
        {purchaseAlert && (
          <Alert severity="success" sx={{ mb: 2 }}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>Success</AlertTitle>
            Items purchase successful
          </Alert>
        )}
        {!cart.length ? (
          <>
            <Typography variant="h5">Your Cart is Empty</Typography>
            <Button component={Link} to="/product" variant="contained" sx={{ color: 'white', fontWeight: 'bold', textTransform: 'capitalize', borderRadius: 3, mt: 3 }}>
              Shop now
            </Button>
          </>
        ) : (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                {cart.length ? (
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography>Selected Product</Typography>
                    <Button onClick={handleClearCart} sx={{ ml: 'auto', textTransform: 'capitalize' }}>
                      Remove All
                    </Button>
                  </Box>
                ) : null}
                <CartCards />
              </Grid>
              <Grid item xs={0} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                <ShoppingSummary handleBuy={handleBuy} />
              </Grid>
            </Grid>
            <ShoppingSummaryDrawer handleBuy={handleBuy} />
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
