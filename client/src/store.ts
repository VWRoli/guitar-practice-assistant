import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

export const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware))
);
