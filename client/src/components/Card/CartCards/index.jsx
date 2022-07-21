import { Divider, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const CartCards = () => {
  const { cart } = useSelector((state) => state.products);

  return (
    <Grid container direction="column">
      {cart.map((item) => (
        <Grid item key={item._id}>
          <CartCard cartItem={item} />
        </Grid>
      ))}
      <Divider sx={{ borderBottomWidth: 6, my: 2, opacity: 0.5 }} />
    </Grid>
  );
};

export default CartCards;
