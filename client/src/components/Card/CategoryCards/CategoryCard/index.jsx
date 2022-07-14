import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryCard = ({ name, cardColor, href = '/product' }) => {
  return (
    <Box component={Link} to={href} sx={{ textDecoration: 'none' }}>
      <Paper sx={{ height: '150px', backgroundImage: `linear-gradient(to right bottom, white, ${cardColor})`, textDecoration: 'none' }}>
        <Typography variant="h4" paddingTop={3} paddingLeft={3} fontFamily="fantasy" sx={{ textDecoration: 'none' }}>
          {name}
        </Typography>
      </Paper>
    </Box>
  );
};

export default CategoryCard;
