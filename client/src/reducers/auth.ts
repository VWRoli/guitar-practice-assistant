import { Action } from "../actions/Types";
import { ActionType } from "../constants/actionTypes";

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
  isLoading: boolean;
};

const localValue = localStorage.getItem("guitar-pa-profile");

const defaultState: AuthState = {
  authData: localValue !== null ? JSON.parse(localValue) : null,
  isLoading: false,
};

const authReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.AUTH:
      localStorage.setItem(
        "guitar-pa-profile",
        JSON.stringify({ ...action?.payload })
      );
      return { ...state, authData: action?.payload };
    case ActionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case ActionType.SET_AUTH_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default authReducer;
