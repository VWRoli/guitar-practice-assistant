import axios from 'axios';
import { formDataType } from '../components/Auth/Auth';
import { ItemType } from '../components/Dashboard/Sidebar/Sidebar';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('guitar-pa-profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('guitar-pa-profile') || '').token
    }`;
  }
  return req;
});

export const fetchItems = () => API.get('/items');
export const createItem = (newItem: ItemType) => API.post('/items', newItem);
export const updateItem = (id: string | undefined, updatedItem: ItemType) =>
  API.patch(`/items/${id}`, updatedItem);
export const deleteItem = (id: string | undefined) =>
  API.delete(`/items/${id}`);

export const signIn = (formData: formDataType) =>
  API.post('/user/signin', formData);
export const signUp = (formData: formDataType) =>
  API.post('/user/signup', formData);

export const getProfile = () => API.get('/user/me');

//todo datatype
export const updateProfile = (updatedProfile: any) =>
  API.patch('/user/me', updatedProfile);
export const deleteProfile = () => API.delete(`/user/me`);
