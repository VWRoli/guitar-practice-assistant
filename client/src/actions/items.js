import * as api from '../api';
import {
  CREATE_ITEMS,
  DELETE_ITEM,
  FETCH_ITEMS,
} from '../constants/actionTypes';

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

export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.deleteItem(id);

    dispatch({ type: DELETE_ITEM, payload: id });
  } catch (error) {
    console.log(error);
  }
};
