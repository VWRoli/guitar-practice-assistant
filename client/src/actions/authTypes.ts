import { ActionType } from '../constants/actionTypes';

interface AuthenticateAction {
  type: ActionType.AUTH;
  //todo check data type
  payload: any;
}
interface SetAuthErrorAction {
  type: ActionType.SET_ERROR;
  payload: string;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction = AuthenticateAction | SetAuthErrorAction | LogoutAction;
