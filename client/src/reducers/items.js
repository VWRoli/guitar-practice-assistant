import {
  FETCH_ITEMS,
  CREATE_ITEMS,
  DELETE_ITEM,
  SET_LOADING,
  SET_ERROR,
} from '../constants/actionTypes';

const defaultState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  items: [],
};

const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload, isLoading: false };
    case CREATE_ITEMS:
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
    default:
      return state;
  }
};
export default itemsReducer;
