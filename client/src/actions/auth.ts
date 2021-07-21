import * as api from '../api';
import { Dispatch } from 'redux';
import { ActionType } from '../constants/actionTypes';
import { Action } from './Types';
import { formDataType } from '../components/Auth/Auth';

export const signin =
  (formData: formDataType, history: any) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.SET_AUTH_LOADING, payload: true });

      const { data } = await api.signIn(formData);

      dispatch({ type: ActionType.AUTH, payload: data });
      history.push('/dashboard');
      dispatch({ type: ActionType.SET_AUTH_LOADING, payload: false });
    } catch (error) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: error.response.data.error.message,
      });
    }
  };
export const signup =
  (formData: formDataType, history: any) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await api.signUp(formData);

      dispatch({ type: ActionType.AUTH, payload: data });

      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: error.response.data.error.message,
      });
    }
  };

export const logout = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.LOGOUT });
  } catch (error) {
    dispatch({
      type: ActionType.SET_ERROR,
      payload: 'Error logging out',
    });
  }
};
