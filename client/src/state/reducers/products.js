import { FETCH_ALL_PRODUCTS } from '../action-types';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return { ...state, products: action.payload.data };
    default:
      return state;
  }
};

export default productReducer;
