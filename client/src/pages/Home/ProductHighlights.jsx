import React from 'react';
import { Box, Container, Button, Typography } from '@mui/material';
import styles from './styles';
import { ProductHighlightCarousel } from '../../components';

const ProductHighlights = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ ...styles.Container }}>
        <Typography variant="h3" align="center" sx={{ ...styles.Title }}>
          Product Highlights
        </Typography>
        <ProductHighlightCarousel column={3} />
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button variant="contained" sx={{ borderRadius: 5 }}>
            All Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductHighlights;
