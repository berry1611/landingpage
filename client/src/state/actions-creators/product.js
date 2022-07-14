import * as api from '../../api';
import { FETCH_ALL_PRODUCTS, FETCH_PRODUCTS_BY_NAME } from '../action-types';

export const getProducts = (limit) => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts(limit);
    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByName = (name) => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsByName(name);
    dispatch({ type: FETCH_PRODUCTS_BY_NAME, payload: data });
  } catch (error) {
    console.log(error);
  }
};
