import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from './features/counter/counter.slice'
import logger from 'redux-logger'
import boxSlice from "./features/box/box.slice";

const reducer = combineReducers({
  count: counterSlice,
  box: boxSlice
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
