import { createStore, combineReducers } from 'redux';
import { worldReducer } from './reducers/world';

const reducers = combineReducers({ worldReducer });

export const store = createStore(reducers);

export type ReducersType = typeof reducers;

export type StoreType = ReturnType<ReducersType>;
