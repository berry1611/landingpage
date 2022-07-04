import React from 'react';
import { Container, Paper } from '@mui/material';
import { AuthForm } from '../../components';

const Register = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ mt: 10, borderRadius: 5 }} elevation={6}>
        <AuthForm registerForm />
      </Paper>
    </Container>
  );
};

export default Register;
