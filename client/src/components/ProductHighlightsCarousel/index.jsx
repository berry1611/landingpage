import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, IconButton } from '@mui/material';
import ProductCard from '../Card/ProductCards/ProductCard';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
let column;
let maxStep;
let screenSize;

const ProductHighlightCarousel = () => {
  screenSize = window.innerWidth;
  const { products } = useSelector((state) => state.products);
  const [activeStep, setActiveStep] = React.useState(0);

  if (screenSize > 1200) {
    // XL
    column = 4;
  } else if (screenSize > 900) {
    // LG
    column = 3;
  } else if (screenSize > 600) {
    // MD
    column = 2;
  } else {
    // SM & XS
    column = 1;
  }
  products.length && (maxStep = products.length / column);

  const handlePrev = () => {
    setActiveStep((prevStep) => (prevStep - 1 >= 0 ? prevStep - 1 : maxStep - 1));
  };

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1 < maxStep ? prevStep + 1 : 0));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const displayItems = (products, column) => {
    const result = [];

    if (!products.length) return null;

    for (let i = 0; i < products.length; i += column) {
      result.push(
        <Grid key={i} container spacing={3} sx={{ px: 2 }}>
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
      {!products.length ? null : (
        <Grid container alignItems="center" columns={14}>
          <Grid item xs={1} sx={{ visibility: { xs: 'hidden', md: 'visible' } }}>
            <IconButton onClick={handlePrev}>
              <ArrowBackIosNewIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
              {displayItems(products, column)}
            </AutoPlaySwipeableViews>
          </Grid>
          <Grid item xs={1} sx={{ visibility: { xs: 'hidden', md: 'visible' } }}>
            <IconButton onClick={handleNext}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductHighlightCarousel;
