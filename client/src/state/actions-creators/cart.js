import * as api from '../../api';
import { ADD_PRODUCT_TO_CART, CLEAR_CART, FETCH_CART } from '../action-types';

export const getProductCart = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCart();
    dispatch({ type: FETCH_CART, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addProductToCart = (product) => async (dispatch) => {
  try {
    const { data } = await api.addProductToCart(product);
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    await api.clearCart();
    dispatch({ type: CLEAR_CART });
  } catch (error) {
    console.log(error);
  }
};
