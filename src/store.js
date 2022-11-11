// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// // import lazyLoad from './features/lazyloadpage/lazyload.slice'
// import home from './features/home/home.slice'

// import logger from 'redux-logger'

// const reducer = combineReducers({
//   // lazyLoad: lazyLoad,
//   home:home
// });

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

// export default store;


// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import { combineReducers } from "redux";

// import home from './features/home/home.slice'
// const reducer = combineReducers({
//   // lazyLoad: lazyLoad,
//   home:home
// });
// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

// import { configureStore } from "@reduxjs/toolkit";
// import home from './features/home/home.slice'
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';


// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, home)

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// })

// export const persistor = persistStore(store)


import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import home from './features/home/home.slice'
import shape from './features/shape/shape.slice'
import logger from 'redux-logger'

const reducers = combineReducers({
  home: home,
  shape: shape
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;