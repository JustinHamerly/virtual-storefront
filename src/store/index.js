import { createStore, combineReducers } from 'redux';

import categoryReducer from './categories.js';

let reducers = combineReducers({category: categoryReducer});

// create our "store" - stands for storage not storefront :P
const store = () => {
  return createStore(reducers);
}

export default store;
