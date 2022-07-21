import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import rupiah from '../../../../utils/rupiahCurrencyFormat';

const CartCard = ({ cartItem }) => {
  return (
    <Box>
      <Divider sx={{ borderBottomWidth: 6, my: 2, opacity: 0.5 }} />
      <Grid container>
        <Grid item>
          <Box component="img" src={cartItem.imageUrl} height={100} width={100} />
        </Grid>
        <Grid item>
          <Typography variant="h6">{`${cartItem.name} ${cartItem.code}`}</Typography>
          <Typography variant="body2">{cartItem.color}</Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ color: 'info.main' }}>{`x${cartItem.quantity}`}</Typography>
        </Grid>
        <Grid item marginLeft="auto" marginTop="auto">
          <Typography variant="h6" fontWeight="bold">
            {rupiah(cartItem.subTotal)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartCard;
