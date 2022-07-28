import { CLEAR_CART, ADD_PRODUCT_TO_CART, FETCH_ALL_PRODUCTS, FETCH_CART, UPDATE_QUANTITY, DELETE_CART_ITEM, FETCH_PRODUCTS_CATEGORY } from '../action-types';

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return { ...state, products: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages };
    case FETCH_PRODUCTS_CATEGORY:
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
    case UPDATE_QUANTITY:
      return { ...state, cart: state.cart.map((item) => (item._id === action.payload.data._id ? action.payload.data : item)) };
    case DELETE_CART_ITEM:
      return { ...state, cart: state.cart.filter((item) => item._id !== action.payload.data.id) };
    default:
      return state;
  }
};

export default productReducer;
