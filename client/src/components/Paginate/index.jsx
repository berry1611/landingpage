import { useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import convertToCamelCase from '../../utils/convertToCamelCase';
import { getProducts } from '../../state/actions-creators/product';

const Paginate = ({ name, page, size }) => {
  const { numberOfPages } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getProducts(name, page));
  }, [page]);

  return (
    <Pagination
      size={size}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => <PaginationItem {...item} component={Link} to={`/product/${convertToCamelCase(name)}?page=${item.page}`} />}
    />
  );
};

export default Paginate;
