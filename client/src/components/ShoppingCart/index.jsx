import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, Divider, IconButton, Grid, Popover, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getProductCart } from '../../state/actions-creators/cart';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ sx }) => {
  const { cart } = useSelector((state) => state.products);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate(0);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton sx={{ ...sx }} onClick={handlePopoverOpen}>
        <Badge badgeContent={cart.length} color="info">
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
      >
        <Grid container direction="column">
          {cart.length ? (
            <Grid item>
              <Box display="flex" alignItems="center" paddingX={2}>
                <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>{`Cart(${cart.length})`}</Typography>
                <Button onClick={handleClearCart} size="small" sx={{ ml: 'auto' }}>
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
                <Grid item>
                  <Box component="img" src={item.imageUrl} height={70} width={70} />
                </Grid>
                <Grid item>
                  <Typography noWrap textOverflow="hidden">
                    {item.name}
                  </Typography>
                  <Typography noWrap textOverflow="hidden">
                    {item.code}
                  </Typography>
                  <Typography variant="body2">x2</Typography>
                </Grid>
                <Grid item marginLeft="auto" marginY="auto">
                  <Typography sx={{ color: 'info.light', fontWeight: 'bold' }}>{`Rp 209.000`}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  );
};

export default ShoppingCart;
