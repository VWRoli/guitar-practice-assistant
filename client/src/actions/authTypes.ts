import { ActionType } from '../constants/actionTypes';
import { AuthDataType } from '../reducers/auth';

interface AuthenticateAction {
  type: ActionType.AUTH;
  //todo check data type
  payload: AuthDataType;
}
interface SetAuthErrorAction {
  type: ActionType.SET_ERROR;
  payload: string;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction = AuthenticateAction | SetAuthErrorAction | LogoutAction;
