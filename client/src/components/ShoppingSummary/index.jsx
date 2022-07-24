import { Paper, Typography, Box, Divider, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import rupiah from '../../utils/rupiahCurrencyFormat';

const ShoppingSummary = ({ handleBuy }) => {
  const { cart } = useSelector((state) => state.products);

  const totalItemQuantity = cart.map((item) => item.quantity).reduce((curr, acc) => curr + acc);
  const totalItemPrice = cart.map((item) => item.subTotal).reduce((curr, acc) => curr + acc);
  const grandTotal = totalItemPrice;

  return (
    <Paper sx={{ p: 2, position: 'fixed', minWidth: 350 }} elevation={3}>
      <Typography variant="h6" fontWeight="bold">
        Shopping Summary
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-between" marginY={2}>
        <Typography>Total item price</Typography>
        <Typography>{rupiah(totalItemPrice)}</Typography>
      </Box>
      <Divider />
      <Box marginTop={2} display="flex" justifyContent="space-between">
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
