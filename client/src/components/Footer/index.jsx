import { AppBar, Typography, Box, Container } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <AppBar position="relative" color="primary" sx={{ top: 'auto', bottom: 0, padding: 2, mt: 2 }}>
      <Container maxWidth="xl">
        <Typography component="body">&copy; 20xx CompanyName. All rights reserved</Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
