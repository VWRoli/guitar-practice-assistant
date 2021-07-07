import { ActionType } from '../constants/actionTypes';
import { Dispatch } from 'react';
import { ItemAction } from '../actions/itemTypes';
import { UserAction } from '../actions/userTypes';
import { AuthAction } from '../actions/authTypes';

export const formatTime = (duration: number): string => {
  const min = String(Math.trunc(duration / 60)).padStart(2, '0');
  const sec = String(duration % 60).padStart(2, '0');
  return `${min}:${sec}`;
};

export const errorHandler = (error: any, dispatch: Dispatch<ItemAction>) => {
  if (error.response) {
    console.log('Problem with response', error.response);
    dispatch({
      type: ActionType.SET_ERROR,
      payload: error.response?.data.error?.message,
    });
  } else if (error.request) {
    console.log('Problem with request');
    dispatch({
      type: ActionType.SET_ERROR,
      payload: error.message,
    });
  } else {
    console.log('Error', error.message);
    dispatch({
      type: ActionType.SET_ERROR,
      payload: error.message,
    });
  }
};
