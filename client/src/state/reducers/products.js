import { FETCH_ALL_PRODUCTS, FETCH_PRODUCTS_BY_NAME } from '../action-types';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return { ...state, products: action.payload.data };
    case FETCH_PRODUCTS_BY_NAME:
      return { ...state, products: action.payload.data };
    default:
      return state;
  }
};

export default productReducer;
