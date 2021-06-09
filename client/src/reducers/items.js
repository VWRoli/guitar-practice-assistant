import { FETCH_ITEMS, CREATE_ITEMS } from '../constants/actionTypes';

export default (items = [], action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload;
    case CREATE_ITEMS:
      return [...items, action.payload];
    default:
      return items;
  }
};
