import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { AuthForm } from '../../components';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/icons/logo.svg';

const Login = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Link to="/">
        <Box component="img" src={LOGO} height={100} width={200} />
      </Link>
      <Paper sx={{ borderRadius: 5 }} elevation={6}>
        <AuthForm />
      </Paper>
    </Container>
  );
};

export default Login;
