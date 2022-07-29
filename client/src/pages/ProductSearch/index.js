import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Footer, NavBar, ProductCards } from '../../components';
import Paginate from '../../components/Paginate';
import { searchProducts } from '../../state/actions-creators/product';

const ProductSearch = () => {
  const { products } = useSelector((state) => state.products);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const keyword = query.get('keyword');
  const page = query.get('page');

  useEffect(() => {
    dispatch(searchProducts(keyword));
  }, [keyword]);

  return (
    <>
      <NavBar position="relative" color="inherit" searchBar />
      <Container maxWidth="xl" sx={{ mt: 4, minHeight: '100vh' }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          {`Search result by keyword : "${keyword}"`}
        </Typography>
        <ProductCards />
        {products.length ? (
          <>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', my: 6 }}>
              <Paginate page={page} size="medium" searchKeyword={keyword} />
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', my: 6 }}>
              <Paginate page={page} size="small" searchKeyword={keyword} />
            </Box>
          </>
        ) : null}
      </Container>
      <Footer />
    </>
  );
};

export default ProductSearch;
