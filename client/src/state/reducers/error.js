import { FETCH_ERROR, RESET_ERROR } from '../action-types';

const initialState = {
  status: null,
  message: null,
  params: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ERROR:
      return { status: action.payload.status, message: action.payload.message, params: action.payload?.params };
    case RESET_ERROR:
      return { status: null, message: null, params: null };
    default:
      return state;
  }
};

export default errorReducer;
