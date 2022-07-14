import React from 'react';
import { Grid } from '@mui/material';
import CategoryCard from './CategoryCard';

const cardColor = ['blue', 'orange', 'yellow', 'red', 'green', 'purple'];

const productProperties = [
  {
    name: 'Top Color',
    href: '/product/topColor',
  },
  {
    name: 'Danagloss',
    href: '/product/danagloss',
  },
  {
    name: 'Blinken',
    href: '/product/blinken',
  },
  {
    name: 'Alfaglos',
    href: '/product/alfaglos',
  },
];

const CategoryCards = () => {
  const displayProducts = (productProperties, cardColor) => {
    let i = 0;
    const products = [];
    for (let product of productProperties) {
      products.push(
        <Grid item xs={6} md={4} lg={3}>
          <CategoryCard name={product.name} cardColor={cardColor[i]} href={product.href} />
        </Grid>
      );
      if (i < cardColor.length - 1) i++;
      else i = 0;
    }
    return products;
  };

  return (
    <Grid container spacing={3} justifyContent="flex-start">
      {displayProducts(productProperties, cardColor)}
    </Grid>
  );
};

export default CategoryCards;
