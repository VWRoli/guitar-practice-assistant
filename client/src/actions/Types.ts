import { ItemType } from "../components/Dashboard/Sidebar/Sidebar";
import { ActionType } from "../constants/actionTypes";
import { AuthDataType } from "../reducers/auth";

interface FetchItemsAction {
  type: ActionType.FETCH_ITEMS;
  payload: ItemType[];
}

interface CreateItemAction {
  type: ActionType.CREATE_ITEM;
  payload: ItemType;
}

interface UpdateItemAction {
  type: ActionType.UPDATE_ITEM;
  payload: ItemType;
}
interface DeleteItemAction {
  type: ActionType.DELETE_ITEM;
  payload: string | undefined;
}

interface SetItemErrorAction {
  type: ActionType.SET_ERROR;
  payload: string;
}

interface SetLoadingAction {
  type: ActionType.SET_LOADING;
}

interface UnsetLoadingAction {
  type: ActionType.UNSET_ERROR;
}

interface SetCurrentIdAction {
  type: ActionType.SET_CURRENT_ID;
  payload: string | undefined;
}
interface FetchUserAction {
  type: ActionType.FETCH_USER;
  payload: AuthDataType["user"];
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

interface AuthenticateAction {
  type: ActionType.AUTH;
  payload: AuthDataType;
}
interface SetAuthErrorAction {
  type: ActionType.SET_ERROR;
  payload: string;
}
interface SetAuthLoadingAction {
  type: ActionType.SET_AUTH_LOADING;
  payload: boolean;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

export type Action =
  | FetchItemsAction
  | CreateItemAction
  | UpdateItemAction
  | SetItemErrorAction
  | DeleteItemAction
  | SetLoadingAction
  | UnsetLoadingAction
  | SetCurrentIdAction
  | FetchUserAction
  | SetUserErrorAction
  | UpdateUserAction
  | UpdateUserErrorMsgAction
  | AuthenticateAction
  | SetAuthErrorAction
  | SetAuthLoadingAction
  | LogoutAction;
