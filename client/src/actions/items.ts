import { Dispatch } from 'react';
import * as api from '../api';
import { ItemType } from '../components/Dashboard/Sidebar/Sidebar';
import { ActionType } from '../constants/actionTypes';
import { errorHandler } from '../utils/helpers';
import { Action } from './Types';

export const getItems = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.SET_ERROR, payload: '' });
    dispatch({ type: ActionType.SET_LOADING });
    const { data } = await api.fetchItems();

    dispatch({ type: ActionType.FETCH_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch);
  }
};

export const createItem =
  (item: ItemType) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.SET_ERROR, payload: '' });
      const { data } = await api.createItem(item);
      dispatch({ type: ActionType.CREATE_ITEM, payload: data });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch);
    }
  };

export const updateItem =
  (id: string | undefined, item: ItemType) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.SET_ERROR, payload: '' });
      const { data } = await api.updateItem(id, item);
      dispatch({ type: ActionType.UPDATE_ITEM, payload: data });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch);
    }
  };

export const deleteItem =
  (id: string | undefined) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.SET_ERROR, payload: '' });
      await api.deleteItem(id);

      dispatch({ type: ActionType.DELETE_ITEM, payload: id });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch);
    }
  };

export const setCurrentId =
  (id: string | undefined) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.SET_ERROR, payload: '' });
      dispatch({ type: ActionType.SET_CURRENT_ID, payload: id });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch);
    }
  };

export const removeError = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.SET_ERROR, payload: '' });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch);
  }
};
