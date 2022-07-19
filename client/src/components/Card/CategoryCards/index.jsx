import React from 'react';
import { Grid } from '@mui/material';
import CategoryCard from './CategoryCard';
import { useSelector } from 'react-redux';
import convertToCamelCase from '../../../utils/convertToCamelCase';

const cardColor = ['blue', 'orange', 'yellow', 'red', 'green', 'purple'];

const CategoryCards = () => {
  const { products } = useSelector((state) => state.products);
  const productProperties = products
    .map((product) => product.name)
    .filter((product, index, self) => self.indexOf(product) === index)
    .map((name) => {
      return { name, href: `/product/${convertToCamelCase(name)}` };
    });

  const displayProducts = (productProperties, cardColor) => {
    let i = 0;
    const products = [];
    for (let product of productProperties) {
      products.push(
        <Grid item key={product.name} xs={6} md={4} lg={3}>
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
