import { ItemType } from '../components/Dashboard/Sidebar/Sidebar';
import { ActionType } from '../constants/actionTypes';

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

export type ItemAction =
  | FetchItemsAction
  | CreateItemAction
  | UpdateItemAction
  | SetItemErrorAction
  | DeleteItemAction
  | SetLoadingAction
  | UnsetLoadingAction
  | SetCurrentIdAction;
