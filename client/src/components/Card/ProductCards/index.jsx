import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const ProductCards = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <Grid sx={{ display: 'flex', alignItems: 'center' }} container spacing={3} justifyContent="flex-start">
      {products.map((product) => (
        <Grid item key={product._id} xs={6} sm={4} md={3} lg={2}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCards;
