import { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button, Alert } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../../state/actions-creators/authentication';
import styles from './styles';
import { RESET_ERROR } from '../../state/action-types/actionTypes';
import { errorAction } from '../../state/actions-creators/error';
import { ERROR_PARAMS_AUTH, ERROR_PARAMS_CONFIRM_PASSWORD, ERROR_PARAMS_EMAIL, ERROR_PARAMS_NAME, ERROR_PARAMS_PASSWORD } from '../../constant/error-params';

const initialState = { name: '', email: '', password: '', confirmPassword: '' };

const AuthForm = ({ registerForm }) => {
  const error = useSelector((state) => state.error);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const disableButton = (formData) => {
    if (!registerForm) {
      return formData.email.trim() === '' || formData.password.trim() === '';
    } else {
      return formData.email.trim() === '' || formData.password.trim() === '' || formData.name.trim() === '' || formData.confirmPassword.trim() === '';
    }
  };

  useEffect(() => {
    dispatch(errorAction(RESET_ERROR));
  }, [location]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (registerForm) {
      dispatch(register(formData, navigate));
    } else {
      dispatch(login({ email: formData.email, password: formData.password }, navigate));
    }
  };

  return (
    <Grid container>
      <Grid item sm={6} sx={{ ...styles.LeftSide }} />
      <Grid item xs={12} sm={6}>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={4} sx={{ ...styles.formGrid }}>
            <Grid item>
              <Typography variant="h5">{registerForm ? 'Register' : 'Log in'}</Typography>
            </Grid>
            {error.status === 400 && error.params === ERROR_PARAMS_AUTH && (
              <Grid item>
                <Alert severity="error">{error.message}</Alert>
              </Grid>
            )}
            {registerForm && (
              <Grid item>
                <TextField name="name" fullWidth size="small" label="Full Name" onChange={handleChange} error={error.status === 422 && error.params === ERROR_PARAMS_NAME} helperText={error.params === ERROR_PARAMS_NAME && error.message} />
              </Grid>
            )}
            <Grid item>
              <TextField
                name="email"
                fullWidth
                size="small"
                label="Email"
                type="email"
                onChange={handleChange}
                error={error.status === 422 && error.params === ERROR_PARAMS_EMAIL}
                helperText={error.params === ERROR_PARAMS_EMAIL && error.message}
              />
            </Grid>
            <Grid item>
              <TextField
                name="password"
                fullWidth
                size="small"
                label="Password"
                type="password"
                onChange={handleChange}
                error={error.status === 422 && error.params === ERROR_PARAMS_PASSWORD}
                helperText={error.params === ERROR_PARAMS_PASSWORD && error.message}
              />
            </Grid>
            {registerForm && (
              <Grid item>
                <TextField
                  name="confirmPassword"
                  fullWidth
                  size="small"
                  label="Confirm Password"
                  type="password"
                  onChange={handleChange}
                  error={error.status === 422 && error.params === ERROR_PARAMS_CONFIRM_PASSWORD}
                  helperText={error.params === ERROR_PARAMS_CONFIRM_PASSWORD && error.message}
                />
              </Grid>
            )}
            <Grid item>
              <Button fullWidth type="submit" variant="contained" disabled={disableButton(formData)} sx={{ ...styles.ButtonSubmit }}>
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
