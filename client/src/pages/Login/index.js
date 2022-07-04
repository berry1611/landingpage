import React from 'react';
import { Container, Paper } from '@mui/material';
import { AuthForm } from '../../components';

const Login = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ my: 20, borderRadius: 5 }} elevation={6}>
        <AuthForm />
      </Paper>
    </Container>
  );
};

export default Login;
