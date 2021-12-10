import { createStore, combineReducers } from 'redux';

import categoryReducer from './categories.js';
import productReducer from './products.js';

let reducers = combineReducers({
  category: categoryReducer,
  product: productReducer
});

// create our "store" - stands for storage not storefront :P
const store = () => {
  return createStore(reducers);
}

export default store;
