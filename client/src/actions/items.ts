import { Dispatch } from 'react';
import * as api from '../api';
import { ItemType } from '../components/Dashboard/Sidebar/Sidebar';
import { ActionType } from '../constants/actionTypes';
import { ItemAction } from './itemTypes';

export const getItems = () => async (dispatch: Dispatch<ItemAction>) => {
  try {
    dispatch({ type: ActionType.UNSET_ERROR });
    dispatch({ type: ActionType.SET_LOADING });
    const { data } = await api.fetchItems();
    dispatch({ type: ActionType.FETCH_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ActionType.SET_ERROR, payload: error.message });
  }
};

export const createItem =
  (item: ItemType) => async (dispatch: Dispatch<ItemAction>) => {
    try {
      console.log('create');
      console.log(item);
      const { data } = await api.createItem(item);
      console.log(data);
      dispatch({ type: ActionType.CREATE_ITEM, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ActionType.SET_ERROR, payload: error.message });
    }
  };

export const updateItem =
  (id: string | undefined, item: ItemType) =>
  async (dispatch: Dispatch<ItemAction>) => {
    try {
      const { data } = await api.updateItem(id, item);
      dispatch({ type: ActionType.UPDATE_ITEM, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ActionType.SET_ERROR, payload: error.message });
    }
  };

export const deleteItem =
  (id: string | undefined) => async (dispatch: Dispatch<ItemAction>) => {
    try {
      await api.deleteItem(id);

      dispatch({ type: ActionType.DELETE_ITEM, payload: id });
    } catch (error) {
      console.log(error);
      dispatch({ type: ActionType.SET_ERROR, payload: error.message });
    }
  };

export const setCurrentId =
  (id: string | undefined) => async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({ type: ActionType.SET_CURRENT_ID, payload: id });
    } catch (error) {
      console.log(error);
      dispatch({ type: ActionType.SET_ERROR, payload: error.message });
    }
  };

export const removeError = () => async (dispatch: Dispatch<ItemAction>) => {
  try {
    dispatch({ type: ActionType.UNSET_ERROR });
  } catch (error) {
    console.log(error);
    dispatch({ type: ActionType.SET_ERROR, payload: error.message });
  }
};
