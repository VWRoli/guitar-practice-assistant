import * as api from '../api';
import {
  CREATE_ITEM,
  DELETE_ITEM,
  FETCH_ITEMS,
  SET_ERROR,
  SET_LOADING,
  SET_CURRENT_ID,
  UPDATE_ITEM,
  UNSET_ERROR,
} from '../constants/actionTypes';

export const getItems = () => async (dispatch) => {
  try {
    dispatch({ type: UNSET_ERROR });
    dispatch({ type: SET_LOADING });
    const { data } = await api.fetchItems();
    dispatch({ type: FETCH_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const createItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.createItem(item);

    dispatch({ type: CREATE_ITEM, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const updateItem = (id, item) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(id, item);
    dispatch({ type: UPDATE_ITEM, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.deleteItem(id);

    dispatch({ type: DELETE_ITEM, payload: id });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const setCurrentId = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_CURRENT_ID, payload: id });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const removeError = () => async (dispatch) => {
  try {
    dispatch({ type: UNSET_ERROR });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};
