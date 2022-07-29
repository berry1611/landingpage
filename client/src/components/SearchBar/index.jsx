import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import { searchProducts } from '../../state/actions-creators/product';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SearchBar = ({ color, variant = 'outlined', sx, fullWidth }) => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyPressed = (e) => {
    if (e.keyCode === 13) {
      handleSearchKeyword();
    }
  };

  const handleSearchKeyword = () => {
    if (keyword.trim()) {
      dispatch(searchProducts(keyword));
      navigate(`/product/search?keyword=${keyword}`);
    } else {
      navigate('/product');
    }
  };

  return (
    <TextField
      variant={variant}
      color={color}
      placeholder="Search"
      size="small"
      fullWidth={fullWidth}
      value={keyword}
      onKeyDown={handleKeyPressed}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton color={color} edge="end" disableTouchRipple onClick={handleSearchKeyword}>
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
