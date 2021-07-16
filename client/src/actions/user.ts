import * as api from '../api';
import { Dispatch } from 'react';
import { ActionType } from '../constants/actionTypes';
import { UpdateProfileFormData } from '../components/Dashboard/MainContent/UserProfile/UserProfile';
import { errorHandler } from '../utils/helpers';
import { Action } from './Types';

export const getProfile = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.SET_ERROR, payload: '' });
    const { data } = await api.getProfile();
    dispatch({ type: ActionType.FETCH_USER, payload: data });
  } catch (error) {
    errorHandler(error, dispatch);
  }
};

export const updateProfile =
  (formData: UpdateProfileFormData) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.SET_ERROR, payload: '' });
      const { data } = await api.updateProfile(formData);
      const localUserData = JSON.parse(
        localStorage.getItem('guitar-pa-profile') || '{}'
      );
      const newUser = {
        ...localUserData.user,
        username: formData.username,
        email: formData.email,
      };

      localStorage.setItem(
        'guitar-pa-profile',
        JSON.stringify({ ...localUserData, user: newUser })
      );

      dispatch({ type: ActionType.UPDATE_USER });
      dispatch({ type: ActionType.UPDATE_USER_MSG, payload: data.message });
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
