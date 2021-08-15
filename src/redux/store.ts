import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { worldReducer } from './reducers/world';

const reducers = combineReducers({ worldReducer });

export const store = createStore(reducers, applyMiddleware(thunk));

export type ReducersType = typeof reducers;

export type StoreType = ReturnType<ReducersType>;
