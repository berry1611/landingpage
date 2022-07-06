import React from 'react';
import { Divider, Drawer, List, ListItem, Toolbar, Button, ListItemButton, ListItemText, ListItemIcon, Avatar, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/LocalGroceryStore';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './styles';

const MenuDrawer = ({ open, onClose, user, logout }) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right" sx={{ '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}>
      <Toolbar>
        {!user?.data ? (
          <Box sx={{ my: 2, mx: 'auto' }}>
            <Button component={Link} to="/login" color="primary" disableTouchRipple variant="contained" sx={{ ...styles.ButtonNavbarContained, mr: 1 }}>
              Login
            </Button>
            <Button component={Link} to="/register" color="primary" disableTouchRipple variant="outlined" sx={{ ...styles.ButtonNavbarOutlined }}>
              Register
            </Button>
          </Box>
        ) : (
          <Box display="flex" alignItems="center" marginY={2}>
            <Avatar sx={{ mr: 2, bgcolor: 'purple' }}>{user.data.name.charAt(0)}</Avatar>
            <Typography>{user.data.name}</Typography>
          </Box>
        )}
      </Toolbar>
      <Divider />
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="product" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Product" />
          </ListItemButton>
        </ListItem>
      </List>
      {user?.data && (
        <>
          <Divider />
          <List>
            <ListItem key="logout" disablePadding>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
    </Drawer>
  );
};

export default MenuDrawer;
