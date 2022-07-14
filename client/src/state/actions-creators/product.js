import * as api from '../../api';
import { FETCH_ALL_PRODUCTS } from '../action-types';

export const getProducts = (limit) => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts(limit);
    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
