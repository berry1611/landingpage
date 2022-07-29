import { useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import convertToCamelCase from '../../utils/convertToCamelCase';
import { getProducts, searchProducts } from '../../state/actions-creators/product';

const Paginate = ({ name, page, size, searchKeyword }) => {
  const { numberOfPages } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const paginationItemLink = (item) => {
    if (name) return `/product/${convertToCamelCase(name)}?page=${item.page}`;
    if (searchKeyword) return `/product/search?keyword=${searchKeyword}&page=${item.page}`;
  };

  useEffect(() => {
    if (!searchKeyword) {
      if (page) dispatch(getProducts(name, page));
    } else {
      if (page) dispatch(searchProducts(searchKeyword, page));
    }
  }, [page]);

  return <Pagination size={size} count={numberOfPages} page={Number(page) || 1} variant="outlined" color="primary" renderItem={(item) => <PaginationItem {...item} component={Link} to={paginationItemLink(item)} />} />;
};

export default Paginate;
