import { LOGIN, REGISTER, LOGOUT } from '../../state/action-types';
import { storageKey } from '../../constant/storageKey';

const initialState = {
  authData: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      localStorage.setItem(storageKey.USER_INFO, JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authenticationReducer;
