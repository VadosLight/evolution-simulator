import { createStore, combineReducers } from 'redux';
import { worldReducer } from './reducers/world';

const combined = combineReducers({ worldReducer });

export const store = createStore(combined);
