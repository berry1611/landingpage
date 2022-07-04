import * as api from '../../api';
import { LOGIN, REGISTER } from '../action-types/actionTypes';

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, payload: data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: REGISTER, payload: data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
