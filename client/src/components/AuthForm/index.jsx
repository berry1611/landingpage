import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register, login } from '../../state/actions-creators/authentication';
import styles from './styles';

const initialState = { name: '', email: '', password: '', confirmPassword: '' };

const AuthForm = ({ registerForm }) => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (registerForm) {
      dispatch(register(formData, navigate));
    } else {
      dispatch(login(formData, navigate));
    }
  };

  return (
    <Grid container>
      <Grid item md={6} sx={{ ...styles.LeftSide }} />
      <Grid item xs={12} sm={12} md={6}>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={4} sx={{ ...styles.formGrid }}>
            <Grid item>
              <Typography variant="h5">{registerForm ? 'Register' : 'Log in'}</Typography>
            </Grid>
            {registerForm && (
              <Grid item>
                <TextField name="name" fullWidth size="small" label="Full Name" required onChange={handleChange} />
              </Grid>
            )}
            <Grid item>
              <TextField name="email" fullWidth size="small" label="Email" type="email" required onChange={handleChange} />
            </Grid>
            <Grid item>
              <TextField name="password" fullWidth size="small" label="Password" type="password" required onChange={handleChange} />
            </Grid>
            {registerForm && (
              <Grid item>
                <TextField name="confirmPassword" fullWidth size="small" label="Confirm Password" type="password" required onChange={handleChange} />
              </Grid>
            )}
            <Grid item>
              <Button fullWidth type="submit" variant="contained" sx={{ ...styles.ButtonSubmit }}>
                {registerForm ? 'Register' : 'Login'}
              </Button>
            </Grid>
            <Grid item>
              {registerForm ? (
                <Typography variant="body2">
                  Already have an account?{' '}
                  <Typography variant="body2" component={Link} to="/login" sx={{ ...styles.Link }}>
                    Log in
                  </Typography>
                </Typography>
              ) : (
                <Typography variant="body2">
                  Don't have any account?{' '}
                  <Typography variant="body2" component={Link} to="/register" sx={{ ...styles.Link }}>
                    Register
                  </Typography>
                </Typography>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default AuthForm;
