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
      <NavBar color="inherit" position="relative" />
      <Container maxWidth="xl">
        <Typography variant="h4" marginY={2}>
          {name}
        </Typography>
        <Divider orientation="horizontal" variant="fullWidth" sx={{ my: 2, bgcolor: 'black' }} />
        <ProductCards />
      </Container>
      <Footer />
    </>
  );
};

export default ProductCategory;
