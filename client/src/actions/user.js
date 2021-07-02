import * as api from '../api';
import {
  SET_USER_ERROR,
  FETCH_USER,
  UPDATE_USER,
  UPDATE_USER_MSG,
} from '../constants/actionTypes';

export const getProfile = () => async (dispatch) => {
  try {
    const { data } = await api.getProfile();
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    dispatch({
      type: SET_USER_ERROR,
      payload: error.response.data.error.message,
    });
  }
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(formData);
    const localUserData = JSON.parse(localStorage.getItem('guitar-pa-profile'));
    const newUser = {
      ...localUserData.user,
      username: formData.username,
      email: formData.email,
    };

    localStorage.setItem(
      'guitar-pa-profile',
      JSON.stringify({ ...localUserData, user: newUser })
    );

    dispatch({ type: UPDATE_USER });
    dispatch({ type: UPDATE_USER_MSG, payload: data.message });
  } catch (error) {
    dispatch({
      type: SET_USER_ERROR,
      payload: error.response.data.error.message,
    });
  }
};
