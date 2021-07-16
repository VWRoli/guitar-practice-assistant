import { ActionType } from '../constants/actionTypes';
import { Dispatch } from 'react';
import { Action } from '../actions/Types';

export const formatTime = (duration: number): string => {
  const min = String(Math.trunc(duration / 60)).padStart(2, '0');
  const sec = String(duration % 60).padStart(2, '0');
  return `${min}:${sec}`;
};

export const errorHandler = (error: any, dispatch: Dispatch<Action>) => {
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
