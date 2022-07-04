import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Box, Container, Toolbar, Typography, Button, Divider, Avatar } from '@mui/material';
import Logo from '../../assets/icons/logo.svg';
import { LOGOUT } from '../../state/action-types/actionTypes';
import styles from './styles';

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate(0);
  };

  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar>
          <Link to="/">
            <Box component="img" src={Logo} sx={{ height: 100, width: 200 }} />
          </Link>
          <Box sx={{ ...styles.NavbarItem }}>
            <Typography component={Link} to="/" sx={{ ...styles.TypographyLink }}>
              Home
            </Typography>
            <Typography component={Link} to="/" sx={{ ...styles.TypographyLink }}>
              Product
            </Typography>
            <Typography component={Link} to="/" sx={{ ...styles.TypographyLink }}>
              Lorem
            </Typography>
            <Typography component={Link} to="/" sx={{ ...styles.TypographyLink }}>
              Lorem
            </Typography>
            <Typography component={Link} to="/" sx={{ ...styles.TypographyLink }}>
              Lorem
            </Typography>
            <Divider sx={{ height: 40, mr: 2, bgcolor: 'primary.main' }} flexItem orientation="vertical" />
            {user?.data ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ mr: 2, bgcolor: 'purple' }}>{user.data.name.charAt(0)}</Avatar>
                <Button variant="contained" onClick={logout} sx={{ ...styles.ButtonNavbarContained }}>
                  Logout
                </Button>
              </Box>
            ) : (
              <>
                <Button component={Link} to="/login" color="primary" disableTouchRipple variant="outlined" sx={{ ...styles.ButtonNavbarOutlined }}>
                  Login
                </Button>
                <Button component={Link} to="/register" color="primary" disableTouchRipple variant="contained" sx={{ ...styles.ButtonNavbarContained }}>
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
