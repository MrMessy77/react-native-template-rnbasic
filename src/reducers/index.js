import { combineReducers } from 'redux';

import test from './test';

const RootReducer = combineReducers({
  test
});

export default RootReducer;

export * from './test';