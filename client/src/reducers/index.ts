import { combineReducers } from 'redux';

import items from './items';
import auth from './auth';
import user from './user';

const reducers = combineReducers({
  items,
  auth,
  user,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
