import { useEffect } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import ProductCards from '../Card/ProductCards';
import { Container, Divider, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getProductsByName } from '../../state/actions-creators/product';

const ProductCategory = ({ name }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByName(name));
  }, []);

  return (
    <>
      <NavBar color="inherit" position="relative" searchBar />
      <Typography variant="h4" marginTop={2} textAlign="center">
        {name}
      </Typography>
      <Container maxWidth="lg">
        <Divider orientation="horizontal" variant="fullWidth" sx={{ my: 3, bgcolor: 'black' }} />
        <ProductCards />
      </Container>
      <Footer />
    </>
  );
};

export default ProductCategory;
