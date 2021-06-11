import axios from 'axios';

const url = 'https://localhost:5000/items';

export const fetchItems = () => axios.get(url);
export const createItem = (newItem) => axios.post(url, newItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);
