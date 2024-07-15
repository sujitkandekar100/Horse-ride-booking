// redux/store.js
// redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Make sure this path is correct

export const store = createStore(rootReducer);
