import * as api from '../../api';
import { ADD, SUB } from '../../constant/cart';
import { ADD_PRODUCT_TO_CART, CLEAR_CART, DELETE_CART_ITEM, FETCH_CART, UPDATE_QUANTITY } from '../action-types';

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

export const updateQuantity = (id, mode) => async (dispatch) => {
  let payload;
  if (mode === SUB) {
    payload = { sub: 1, add: null };
  } else if (mode === ADD) {
    payload = { sub: null, add: 1 };
  } else {
    payload = { sub: null, add: null };
  }

  try {
    const { data } = await api.updateQuantity(id, payload);
    dispatch({ type: UPDATE_QUANTITY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartItem = (id) => async (dispatch) => {
  try {
    await api.deleteCartItem(id);
    dispatch({ type: DELETE_CART_ITEM, payload: { data: { id } } });
  } catch (error) {
    console.log(error);
  }
};
