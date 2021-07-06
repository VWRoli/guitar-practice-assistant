import { ActionType } from '../constants/actionTypes';
import { AuthDataType } from '../reducers/auth';

interface FetchUserAction {
  type: ActionType.FETCH_USER;
  payload: AuthDataType['user'];
}

interface SetUserErrorAction {
  type: ActionType.SET_USER_ERROR;
  payload: string;
}

interface UpdateUserAction {
  type: ActionType.UPDATE_USER;
}

interface UpdateUserErrorMsgAction {
  type: ActionType.UPDATE_USER_MSG;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | SetUserErrorAction
  | UpdateUserAction
  | UpdateUserErrorMsgAction;
