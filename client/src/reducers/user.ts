import { Action } from '../actions/Types';
import { ActionType } from '../constants/actionTypes';

type UserState = {
  user: any;
  isUserError: boolean;
  message: string;
};

const defaultState: UserState = {
  user: null,
  isUserError: false,
  message: '',
};

const userReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_USER:
      return { ...state, user: action.payload, isUserError: false };
    case ActionType.SET_USER_ERROR:
      return { ...state, isUserError: true };
    case ActionType.UPDATE_USER:
      return {
        ...state,
        isUserError: false,
      };
    case ActionType.UPDATE_USER_MSG:
      return { ...state, message: action.payload };

    default:
      return state;
  }
};
export default userReducer;
