import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';

import styles from './styles';

const ProductCard = ({ product, highlight }) => {
  return (
    <Card sx={{ ...styles.Cardwrapper }}>
      <CardMedia component="img" alt={product.name} height="200" image={product.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
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
            <Button color="info">Buy</Button>
          </CardActions>
        )}
      </Box>
    </Card>
  );
};

export default ProductCard;
