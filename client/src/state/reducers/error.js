import { ERROR } from '../action-types/actionTypes';

const initialState = {
  errorMessage: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
