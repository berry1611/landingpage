import { RESET_ERROR } from '../action-types/actionTypes';

export const errorAction = (actionType, error) => {
  if (actionType === RESET_ERROR) {
    return { type: actionType };
  }
  return { type: actionType, payload: { status: error.response.status, message: error.response.data.message, params: error.response.data?.params } };
};
