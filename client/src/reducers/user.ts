import { UserAction } from '../actions/userTypes';
import { ActionType } from '../constants/actionTypes';

const defaultState = {
  user: null,
  isUserError: false,
  message: '',
};

const userReducer = (state = defaultState, action: UserAction) => {
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
    case ActionType.DELETE_USER: {
      localStorage.clear();
      return { ...state, user: null };
    }
    default:
      return state;
  }
};
export default userReducer;
