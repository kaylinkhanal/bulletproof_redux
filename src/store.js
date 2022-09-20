import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from './features/counter/counter.slice'
import logger from 'redux-logger'

const reducer = combineReducers({
  count: counterSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
