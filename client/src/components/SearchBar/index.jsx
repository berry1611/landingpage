import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';

const SearchBar = ({ color, variant = 'outlined', sx, fullWidth }) => {
  return (
    <TextField
      variant={variant}
      color={color}
      label="Search"
      size="small"
      fullWidth={fullWidth}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton color={color} edge="end" disableTouchRipple>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        ...sx,
      }}
    />
  );
};

export default SearchBar;
