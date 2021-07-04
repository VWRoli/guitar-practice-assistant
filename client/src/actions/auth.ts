import * as api from '../api';
import { Dispatch } from 'redux';
import { ActionType } from '../constants/actionTypes';
import { AuthAction } from './authTypes';
import { formDataType } from '../components/Auth/Auth';

export const signin =
  (formData: formDataType, history: any) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      const { data } = await api.signIn(formData);

      dispatch({ type: ActionType.AUTH, payload: data });
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: error.response.data.error.message,
      });
    }
  };
export const signup =
  (formData: formDataType, history: any) =>
  async (dispatch: Dispatch<AuthAction>) => {
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

export const logout = () => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch({ type: ActionType.LOGOUT });
    console.log('logout');
  } catch (error) {
    dispatch({
      type: ActionType.SET_ERROR,
      payload: 'Error logging out',
    });
  }
};
