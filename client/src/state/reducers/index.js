import { combineReducers } from 'redux';
import products from './products';
import authentication from './authentication';
import error from './error';

export default combineReducers({ products, authentication, error });
