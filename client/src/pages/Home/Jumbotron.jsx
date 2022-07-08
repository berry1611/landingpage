import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import styles from './styles';

const Jumbotron = () => {
  return (
    <Box sx={{ ...styles.Jumbotron }}>
      <Container maxWidth="lg" sx={{ color: 'white', mt: 30 }}>
        <Typography variant="h4" margin={2}>
          Toko Cat Mobil
        </Typography>
        <Typography variant="h2" margin={2}>
          EKA JAYA
        </Typography>
        <Typography variant="h5" margin={2}>
          Cat, Thinner, Vernis
          <br />
          NC / PU
        </Typography>
      </Container>
    </Box>
  );
};

export default Jumbotron;
