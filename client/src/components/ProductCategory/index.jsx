import { useEffect } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import ProductCards from '../Card/ProductCards';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getProductsByName } from '../../state/actions-creators/product';
import { Link } from 'react-router-dom';

const ProductCategory = ({ name }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByName(name));
  }, []);

  return (
    <>
      <NavBar color="inherit" position="relative" searchBar />
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Button component={Link} to="/product" size="small" sx={{ mt: 'auto', mb: 1 }} startIcon={<KeyboardBackspaceIcon />}>
            Back
          </Button>
          <Typography variant="h4" marginX="auto" marginY={2}>
            {name}
          </Typography>
        </Box>
        <Divider orientation="horizontal" variant="fullWidth" sx={{ mb: 3, bgcolor: 'black' }} />
        <ProductCards />
      </Container>
      <Footer />
    </>
  );
};

export default ProductCategory;
