import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { addProductToCart } from '../../../../state/actions-creators/cart';

const ProductCard = ({ product, highlight }) => {
  const dispatch = useDispatch();

  const handleBuyProduct = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <Card raised sx={{ ...styles.Cardwrapper }}>
      <CardMedia component="img" alt={product.name} image={product.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
      <Box sx={{ ...styles.CardContent }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {product.code}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {product.color}
          </Typography>
        </CardContent>
        {!highlight && (
          <CardActions>
            <Button color="info" variant="contained" sx={{ ml: 1, mb: 1, borderRadius: 5 }} onClick={handleBuyProduct}>
              Buy
            </Button>
          </CardActions>
        )}
      </Box>
    </Card>
  );
};

export default ProductCard;
