import * as api from '../../api';
import { LOGIN, REGISTER, FETCH_ERROR } from '../action-types';
import { errorAction } from './error';

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, payload: data });
    navigate(-1);
  } catch (error) {
    dispatch(errorAction(FETCH_ERROR, error));
  }
};

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: REGISTER, payload: data });
    navigate(-1);
  } catch (error) {
    dispatch(errorAction(FETCH_ERROR, error));
  }
};
