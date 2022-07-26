import axios from 'axios';
import { storageKey } from '../constant/storageKey';

let API;
process.env.NODE_ENV === 'development' ? (API = axios.create({ baseURL: 'http://localhost:5000' })) : (API = axios.create({ baseURL: 'https://landing-page-ecommerce.herokuapp.com/' }));

API.interceptors.request.use((req) => {
  if (localStorage.getItem(storageKey.USER_INFO)) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem(storageKey.USER_INFO)).token}`;
  }
  return req;
});

// Product
export const fetchProducts = (limit) => API.get(`/product?limit=${limit}`);
export const fetchProductsByName = (name) => API.get(`/product?name=${name}`);

// Cart
export const fetchCart = () => API.get('/cart');
export const addProductToCart = (product) => API.post('/cart', product);
export const clearCart = () => API.delete('/cart');
export const updateQuantity = (id, mode) => API.patch(`/cart/${id}`, mode);
export const deleteCartItem = (id) => API.delete(`/cart/${id}`);

// Auth
export const login = (formData) => API.post('/user/login', formData);
export const register = (formData) => API.post('/user/register', formData);
