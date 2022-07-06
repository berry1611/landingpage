import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import { Box, Grid } from '@mui/material';
import ProductCard from '../Card/ProductCards/ProductCard';

const ProductHighlightCarousel = () => {
  const { products } = useSelector((state) => state.products);

  const displayItems = (products) => {
    const result = [];
    let column;
    let screenSize = window.innerWidth;
    if (screenSize > 1280) {
      column = 4;
    } else if (screenSize > 960) {
      column = 3;
    } else if (screenSize > 600) {
      column = 2;
    } else {
      column = 1;
    }

    if (!products.length) return null;

    for (let i = 0; i < products.length; i += column) {
      result.push(
        <Grid container spacing={3} sx={{ px: 2 }}>
          {products.slice(i, i + column).map((product) => (
            <Grid item key={product._id} xs={12 / column}>
              <ProductCard product={product} highlight />
            </Grid>
          ))}
        </Grid>
      );
    }
    return result;
  };

  return (
    <Box>
      <Carousel animation="slide" duration={1000} interval={5000}>
        {displayItems(products)}
      </Carousel>
    </Box>
  );
};

export default ProductHighlightCarousel;
