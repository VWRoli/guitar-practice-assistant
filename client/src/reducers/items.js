import {
  FETCH_ITEMS,
  CREATE_ITEMS,
  DELETE_ITEM,
  LOADING,
} from '../constants/actionTypes';

const defaultState = {
  isLoading: false,
  isError: false,
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
    case LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
export default itemsReducer;
