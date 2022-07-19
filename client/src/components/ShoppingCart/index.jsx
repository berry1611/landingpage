import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, Divider, IconButton, Popover, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getProductCart } from '../../state/actions-creators/cart';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
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
      <IconButton sx={{ mr: 2 }} onClick={handlePopoverOpen} aria-haspopup="true" aria-owns={open ? 'mouse-hover' : undefined}>
        <Badge badgeContent={cart.length} color="info">
          <ShoppingCartIcon color="primary" />
        </Badge>
      </IconButton>
      <Popover
        id="mouse-hover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
      >
        {cart.length ? (
          <Box textAlign="center">
            <Button onClick={handleClearCart} size="small">
              Clear
            </Button>
            <Divider orientation="horizontal" variant="fullWidth" />
          </Box>
        ) : (
          <Typography>Empty Cart</Typography>
        )}
        {cart.map((item) => (
          <Typography>
            {item.name} | {item.code}
          </Typography>
        ))}
      </Popover>
    </>
  );
};

export default ShoppingCart;
