import { useEffect } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import ProductCards from '../Card/ProductCards';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Paginate from '../Paginate';

const ProductCategory = ({ name }) => {
  const [query, setQuery] = useSearchParams();
  const page = query.get('page') || 1;

  return (
    <>
      <NavBar color="inherit" position="relative" searchBar />
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Button component={Link} to="/product" size="small" sx={{ mt: 'auto', mb: 1 }} startIcon={<KeyboardBackspaceIcon />}>
            Back
          </Button>
          <Typography variant="h6" marginX="auto" marginY={2}>
            {name}
          </Typography>
        </Box>
        <Divider orientation="horizontal" variant="fullWidth" sx={{ mb: 3, bgcolor: 'black' }} />
        <ProductCards />
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', my: 6 }}>
          <Paginate name={name} page={page} size="medium" />
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', my: 6 }}>
          <Paginate name={name} page={page} size="small" />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ProductCategory;
