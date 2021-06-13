import {
  FETCH_ITEMS,
  CREATE_ITEM,
  DELETE_ITEM,
  SET_LOADING,
  SET_ERROR,
  SET_CURRENT_ID,
  UPDATE_ITEM,
} from '../constants/actionTypes';

const defaultState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  items: [],
  currentId: null,
};

const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload, isLoading: false };
    case CREATE_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_ERROR:
      return {
        ...state,
        isError: true,
        errorMsg: action.payload,
        isLoading: false,
      };
    case SET_CURRENT_ID:
      return { ...state, currentId: action.payload };
    case UPDATE_ITEM:
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
