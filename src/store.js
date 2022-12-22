import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from './features/counter/counter.slice'
import logger from 'redux-logger'
import boxSlice from "./features/box/box.slice";
import userSlice from "./features/home/userSlice";


const reducer = combineReducers({
  count: counterSlice,
  box: boxSlice,
  users: userSlice
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
