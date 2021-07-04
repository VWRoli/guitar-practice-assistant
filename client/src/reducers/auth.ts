import { AuthAction } from '../actions/authTypes';
import { ActionType } from '../constants/actionTypes';

type State = {
  //todo
  authData: any;
};

const defaultState: State = {
  //todo JSON.parse(localStorage.getItem('guitar-pa-profile') || '{}'
  authData: null,
};
console.log(defaultState);
const authReducer = (state = defaultState, action: AuthAction) => {
  switch (action.type) {
    case ActionType.AUTH:
      localStorage.setItem(
        'guitar-pa-profile',
        JSON.stringify({ ...action?.payload })
      );
      return { ...state, authData: action?.payload };
    case ActionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: '{}' };

    default:
      return state;
  }
};

export default authReducer;
