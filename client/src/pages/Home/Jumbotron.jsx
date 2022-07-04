import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import styles from './styles';

const Jumbotron = () => {
  return (
    <Box sx={{ ...styles.Jumbotron }}>
      <Container maxWidth="lg" sx={{ color: 'white', mt: 20 }}>
        <Typography variant="h3" margin={2}>
          Lorem, ipsum dolor.
        </Typography>
        <Typography variant="h1" margin={2}>
          Lorem, ipsum.
        </Typography>
        <Typography variant="h4" margin={2}>
          Lorem, ipsum dolor.
          <br />
          Lorem. / Lorem.
        </Typography>
      </Container>
    </Box>
  );
};

export default Jumbotron;
