import { CLEAR_CART, ADD_PRODUCT_TO_CART, FETCH_ALL_PRODUCTS, FETCH_CART, FETCH_PRODUCTS_BY_NAME } from '../action-types';

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return { ...state, products: action.payload.data };
    case FETCH_PRODUCTS_BY_NAME:
      return { ...state, products: action.payload.data };
    case FETCH_CART:
      return { ...state, cart: action.payload.data };
    case ADD_PRODUCT_TO_CART:
      const ids = state.cart.map((item) => item._id);
      if (ids.includes(action.payload.data._id)) {
        return { ...state, cart: state.cart.map((item) => (item._id === action.payload.data._id ? action.payload.data : item)) };
      }
      return { ...state, cart: [...state.cart, action.payload.data] };
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default productReducer;
