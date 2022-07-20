import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, Divider, IconButton, Grid, Popover, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getProductCart } from '../../state/actions-creators/cart';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ sx }) => {
  const { cart } = useSelector((state) => state.products);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const rupiah = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    dispatch(getProductCart());
  }, [dispatch]);

  const handlePopoverOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton sx={{ ...sx }} onClick={handlePopoverOpen}>
        <Badge badgeContent={cart.length ? cart.map((item) => item.quantity).reduce((curr, acc) => curr + acc) : 0} color="info">
          <ShoppingCartIcon color="primary" />
        </Badge>
      </IconButton>
      <Popover
        sx={{ maxHeight: '300px' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handlePopoverClose}
        disableScrollLock
        disableAutoFocus
      >
        <Grid container direction="column">
          {cart.length ? (
            <Grid item>
              <Box display="flex" alignItems="center" paddingX={2} paddingY={1}>
                <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>{`Cart(${cart.length})`}</Typography>
                <Button onClick={handleClearCart} size="small" sx={{ ml: 'auto', textTransform: 'capitalize' }}>
                  Clear
                </Button>
              </Box>
              <Divider orientation="horizontal" variant="fullWidth" />
            </Grid>
          ) : (
            <Grid item>
              <Typography padding={8}>Empty Cart</Typography>
            </Grid>
          )}
          {cart.map((item) => (
            <Grid item>
              <Grid container spacing={3} paddingY={1} paddingX={2} justifyContent="flex-start">
                <Grid item xs={4} sm="auto">
                  <Box component="img" src={item.imageUrl} height={70} width={70} />
                </Grid>
                <Grid item xs={4} sm="auto">
                  <Typography noWrap>{item.name}</Typography>
                  <Typography>{item.code}</Typography>
                  <Typography variant="body2" sx={{ color: 'info.light', fontWeight: 'bold' }}>
                    {`x${item.quantity}`}
                  </Typography>
                </Grid>
                <Grid item xs={4} sm="auto" marginLeft="auto" marginY="auto">
                  <Typography sx={{ color: 'info.light', fontWeight: 'bold' }}>{rupiah(item.quantity * 100000)}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
          {cart.length ? (
            <>
              <Divider orientation="horizontal" variant="fullWidth" />
              <Button component={Link} to="/cart" variant="contained" size="small" sx={{ ml: 'auto', mr: 2, my: 2, borderRadius: 5, textTransform: 'capitalize' }}>
                Checkout
              </Button>
            </>
          ) : null}
        </Grid>
      </Popover>
    </>
  );
};

export default ShoppingCart;
