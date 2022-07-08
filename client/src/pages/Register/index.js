import React from 'react';
import { Container, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthForm } from '../../components';
import LOGO from '../../assets/icons/logo.svg';

const Register = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Link to="/">
        <Box component="img" src={LOGO} height={100} width={200} />
      </Link>
      <Paper sx={{ borderRadius: 5 }} elevation={6}>
        <AuthForm registerForm />
      </Paper>
    </Container>
  );
};

export default Register;
