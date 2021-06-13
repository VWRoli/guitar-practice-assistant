import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('guitar-pa-profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('guitar-pa-profile')).token
    }`;
  }
  return req;
});

export const fetchItems = () => API.get('/items');
export const createItem = (newItem) => API.post('/items', newItem);
export const updateItem = (id, updatedItem) =>
  API.patch(`/items/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
