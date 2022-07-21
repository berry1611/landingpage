import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import AddShoopingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { addProductToCart } from '../../../../state/actions-creators/cart';
import rupiah from '../../../../utils/rupiahCurrencyFormat';

const ProductCard = ({ product, highlight }) => {
  const { cart } = useSelector((state) => state.products);
  const cartQuantity = cart.find((item) => item._id === product._id)?.quantity;
  const dispatch = useDispatch();

  const handleBuyProduct = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <Card raised sx={{ ...styles.Cardwrapper }}>
      <CardMedia component="img" alt={product.name} image={product.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
      <Box sx={{ ...styles.CardContent }}>
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" noWrap>
            {product.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {product.code}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" noWrap>
            {product.color}
          </Typography>
          <Typography gutterBottom fontWeight="bold" variant="h6" color="text.secondary" noWrap>
            {rupiah(product.price)}
          </Typography>
        </CardContent>
        {!highlight && (
          <CardActions sx={{ px: 2, pb: 2 }}>
            <Button color="info" variant="contained" sx={{ borderRadius: 5 }} onClick={handleBuyProduct}>
              Buy
            </Button>
            {cartQuantity && (
              <>
                <AddShoopingCartIcon sx={{ ml: 'auto' }} />
                <Typography>{cartQuantity}</Typography>
              </>
            )}
          </CardActions>
        )}
      </Box>
    </Card>
  );
};

export default ProductCard;
