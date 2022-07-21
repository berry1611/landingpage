import { Paper, Typography, Box, Divider, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../state/actions-creators/cart';
import rupiah from '../../utils/rupiahCurrencyFormat';

const ShoppingSummary = ({ setAlert }) => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const totalItemQuantity = cart.map((item) => item.quantity).reduce((curr, acc) => curr + acc);
  const totalItemPrice = cart.map((item) => item.subTotal).reduce((curr, acc) => curr + acc);
  const grandTotal = totalItemPrice;

  const handleBuy = () => {
    dispatch(clearCart());
    setAlert(true);
  };

  return (
    <Paper sx={{ p: 2 }} elevation={3}>
      <Typography variant="h6" fontWeight="bold">
        Shopping Summary
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-between" marginY={2}>
        <Typography>Total item price</Typography>
        <Typography>{rupiah(totalItemPrice)}</Typography>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="row" justifyContent="space-between" marginTop={2}>
        <Typography variant="h6" fontWeight="bold">
          Grand Total
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          {rupiah(grandTotal)}
        </Typography>
      </Box>
      <Button fullWidth variant="contained" sx={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: 18, color: 'white', borderRadius: 3, mt: 3, p: 1 }} onClick={handleBuy}>{`Buy(${totalItemQuantity})`}</Button>
    </Paper>
  );
};

export default ShoppingSummary;
