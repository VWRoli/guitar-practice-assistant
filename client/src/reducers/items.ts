import { ActionType } from '../constants/actionTypes';
import { ItemType } from '../components/Dashboard/Sidebar/Sidebar';
import { ItemAction } from '../actions/itemTypes';

type ItemsState = {
  isLoading: boolean;
  errorMsg: string;
  items: ItemType[];
  currentId?: string;
};

const defaultState: ItemsState = {
  isLoading: false,
  errorMsg: '',
  items: [],
  currentId: undefined,
};

const itemsReducer = (state = defaultState, action: ItemAction) => {
  switch (action.type) {
    case ActionType.FETCH_ITEMS:
      return { ...state, items: action.payload, isLoading: false };
    case ActionType.CREATE_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case ActionType.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ActionType.SET_LOADING:
      return { ...state, isLoading: true };
    case ActionType.SET_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
        isLoading: false,
      };
    case ActionType.UNSET_ERROR:
      return { ...state, errorMsg: '' };
    case ActionType.SET_CURRENT_ID:
      return { ...state, currentId: action.payload };
    case ActionType.UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};
export default itemsReducer;
