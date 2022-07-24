import React from 'react';
import { Box, Typography, Grid, Divider, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import rupiah from '../../../../utils/rupiahCurrencyFormat';
import { useDispatch } from 'react-redux';
import { ADD, SUB } from '../../../../constant/cart';
import { updateQuantity, deleteCartItem } from '../../../../state/actions-creators/cart';

const CartCard = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (cartItem, mode) => () => {
    if (mode === SUB && cartItem.quantity <= 1) {
      dispatch(deleteCartItem(cartItem._id));
    } else {
      dispatch(updateQuantity(cartItem._id, mode));
    }
  };

  const handleRemove = (cartItem) => () => {
    dispatch(deleteCartItem(cartItem._id));
  };

  return (
    <Box>
      <Divider sx={{ borderBottomWidth: 6, my: 2, opacity: 0.5 }} />
      <Grid container>
        <Grid item marginY="auto">
          <Box component="img" src={cartItem.imageUrl} height={100} width={100} />
        </Grid>
        <Grid item xs={8} sm="auto">
          <Typography variant="body1" noWrap>
            {cartItem.name}
          </Typography>
          <Typography variant="body2" noWrap>
            {cartItem.code}
          </Typography>
          <Typography variant="body2" noWrap>
            {cartItem.color}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {rupiah(cartItem.subTotal)}
          </Typography>
        </Grid>
        <Grid item marginLeft="auto" marginTop="auto">
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <IconButton onClick={handleChangeQuantity(cartItem, SUB)}>
              <RemoveCircleOutlineIcon fontSize="small" color="primary" />
            </IconButton>
            <Typography variant="h6" fontWeight="bold" fontSize="small" sx={{ color: 'info.main', mx: 2 }}>{`x${cartItem.quantity}`}</Typography>
            <IconButton onClick={handleChangeQuantity(cartItem, ADD)}>
              <AddCircleOutlineIcon fontSize="small" color="primary" />
            </IconButton>
            <IconButton onClick={handleRemove(cartItem)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartCard;
