import {
  FETCH_ITEMS,
  CREATE_ITEMS,
  DELETE_ITEM,
} from '../constants/actionTypes';

const itemsReducer = (items = [], action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload;
    case CREATE_ITEMS:
      return [...items, action.payload];
    case DELETE_ITEM:
      return items.filter((item) => item._id !== action.payload);
    default:
      return items;
  }
};
export default itemsReducer;
