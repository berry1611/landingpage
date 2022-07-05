import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({ baseURL: 'https://landing-page-ecommerce.herokuapp.com/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchProducts = (limit) => API.get(`/product?limit=${limit}`);

export const login = (formData) => API.post('/user/login', formData);
export const register = (formData) => API.post('/user/register', formData);
