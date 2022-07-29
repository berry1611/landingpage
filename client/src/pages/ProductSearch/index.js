import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Footer, NavBar, ProductCards } from '../../components';
import { searchProducts } from '../../state/actions-creators/product';

const ProductSearch = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const keyword = query.get('keyword');

  useEffect(() => {
    dispatch(searchProducts(keyword));
  }, [keyword]);

  return (
    <>
      <NavBar position="relative" color="inherit" searchBar />
      <Container maxWidth="xl" sx={{ mt: 4, minHeight: '100vh' }}>
        <Typography variant="h6">{`Search result by keyword : "${keyword}"`}</Typography>
        <ProductCards />
      </Container>
      <Footer />
    </>
  );
};

export default ProductSearch;
