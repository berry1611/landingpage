import { useState } from 'react';
import { Button, Typography, Paper, Container, Grid, Drawer, Box, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import rupiah from '../../utils/rupiahCurrencyFormat';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ShoppingSummaryDrawer = ({ handleBuy }) => {
  const { cart } = useSelector((state) => state.products);
  const [open, setOpen] = useState(false);

  const totalItemQuantity = cart.map((item) => item.quantity).reduce((curr, acc) => curr + acc);
  const totalItemPrice = cart.map((item) => item.subTotal).reduce((curr, acc) => curr + acc);
  const grandTotal = totalItemPrice;

  const toggleDrawer = (toggle) => () => {
    setOpen(toggle);
  };

  return (
    <>
      <Paper elevation={6} sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', top: 'auto', bottom: 0, right: 0, left: 0, borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
        <Container maxWidth="xl">
          <Button fullWidth onClick={toggleDrawer(true)}>
            <ExpandLessIcon />
          </Button>
          <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Grid item>
              <Typography variant="body2" fontSize="small">
                Grand Total
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                {rupiah(grandTotal)}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleBuy} sx={{ textTransform: 'capitalize', color: 'white', fontWeight: 'bold', borderRadius: 3, px: 4 }}>{`Buy(${totalItemQuantity})`}</Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        <Container maxWidth="xl" sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight="bold">
            Shopping Summary
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
            <Typography variant="body2" fontSize="small">
              Total item price
            </Typography>
            <Typography variant="body2" fontSize="small">
              {rupiah(totalItemPrice)}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant="body2" fontWeight="bold">
              Grand Total
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {rupiah(grandTotal)}
            </Typography>
          </Box>
        </Container>
      </Drawer>
    </>
  );
};

export default ShoppingSummaryDrawer;
