import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import productImg from '../../assets/icons/logo.svg';
import styles from './styles';

const ProductBrand = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="lg" sx={{ ...styles.Container }}>
        <Typography variant="h3" align="center" sx={{ ...styles.Title }}>
          Product Brand
        </Typography>
        <Grid container justifyContent="flex-start" columnSpacing={10} rowSpacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box component="img" src={productImg} sx={{ height: 100, width: 200 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductBrand;
