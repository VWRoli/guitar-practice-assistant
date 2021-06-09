import * as api from '../api';
import { CREATE_ITEMS, FETCH_ITEMS } from '../constants/actionTypes';

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchItems();

    dispatch({ type: FETCH_ITEMS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.createItem(item);
    dispatch({ type: CREATE_ITEMS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
