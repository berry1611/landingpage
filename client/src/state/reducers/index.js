import { combineReducers } from 'redux';
import products from './products';
import authentication from './authentication';

export default combineReducers({ products, authentication });
