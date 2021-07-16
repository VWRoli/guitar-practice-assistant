import { Action } from '../actions/Types';
import { ActionType } from '../constants/actionTypes';

export interface AuthDataType {
  token: string;
  user: {
    email: string;
    username: string;
    __v: number;
    _id: string;
  };
}

type AuthState = {
  authData: AuthDataType | null;
};

const localValue = localStorage.getItem('guitar-pa-profile');

const defaultState: AuthState = {
  authData: localValue !== null ? JSON.parse(localValue) : null,
};

const authReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.AUTH:
      localStorage.setItem(
        'guitar-pa-profile',
        JSON.stringify({ ...action?.payload })
      );
      return { ...state, authData: action?.payload };
    case ActionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
