import * as api from '../../api';
import { LOGIN, REGISTER, ERROR } from '../action-types/actionTypes';

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, payload: data });
    navigate('/');
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message });
  }
};

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: REGISTER, payload: data });
    navigate('/');
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message });
  }
};
