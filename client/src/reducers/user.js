import {
  FETCH_USER,
  SET_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_MSG,
} from '../constants/actionTypes';

const defaultState = {
  user: null,
  isUserError: false,
  message: '',
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload, isUserError: false };
    case SET_USER_ERROR:
      return { ...state, isUserError: true };
    case UPDATE_USER:
      return {
        ...state,
        isUserError: false,
      };
    case UPDATE_USER_MSG:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
export default userReducer;
