import React from 'react';
import { Box, Container, Button, Typography } from '@mui/material';
import styles from './styles';
import { ProductHighlightCarousel } from '../../components';
import { Link } from 'react-router-dom';

const ProductHighlights = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ ...styles.Container }}>
        <Typography variant="h3" align="center" sx={{ ...styles.Title }}>
          Product Highlights
        </Typography>
        <ProductHighlightCarousel column={3} />
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button component={Link} to="/product" variant="contained" sx={{ borderRadius: 5, color: 'white', textTransform: 'capitalize' }}>
            Visit Product Store
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductHighlights;
