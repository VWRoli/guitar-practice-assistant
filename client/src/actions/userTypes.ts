import { ActionType } from '../constants/actionTypes';

interface FetchUserAction {
  type: ActionType.FETCH_USER;
  //todo payload datatype
  payload: any;
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

interface DeleteUserAction {
  type: ActionType.DELETE_USER;
}

export type UserAction =
  | FetchUserAction
  | SetUserErrorAction
  | UpdateUserAction
  | UpdateUserErrorMsgAction
  | DeleteUserAction;
