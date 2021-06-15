import * as api from '../api';
import { AUTH, SET_ERROR } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, payload: data });
    history.push('/dashboard');
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.error.message });
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data });

    history.push('/dashboard');
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.error.message });
  }
};
