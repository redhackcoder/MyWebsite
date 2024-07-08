// src/store.js
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tripsReducer from './reducers/tripsReducer';

const rootReducer = combineReducers({
  trips: tripsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
