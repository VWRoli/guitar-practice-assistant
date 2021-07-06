import * as api from '../api';
import { Dispatch } from 'react';
import { UserAction } from './userTypes';
import { ActionType } from '../constants/actionTypes';
import { UpdateProfileFormData } from '../components/Dashboard/MainContent/UserProfile/UserProfile';

export const getProfile = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    const { data } = await api.getProfile();
    dispatch({ type: ActionType.FETCH_USER, payload: data });
  } catch (error) {
    dispatch({
      type: ActionType.SET_USER_ERROR,
      payload: error.response.data.error.message,
    });
  }
};

export const updateProfile =
  (formData: UpdateProfileFormData) =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
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
      dispatch({
        type: ActionType.SET_USER_ERROR,
        payload: error.response.data.error.message,
      });
    }
  };
