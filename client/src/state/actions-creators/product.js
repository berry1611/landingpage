import * as api from '../../api';
import { FETCH_ALL_PRODUCTS, FETCH_PRODUCTS_CATEGORY } from '../action-types';

export const getProducts = (name, page) => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts(name, page);
    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsCategory = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsCategory();
    dispatch({ type: FETCH_PRODUCTS_CATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
