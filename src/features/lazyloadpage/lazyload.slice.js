import { createSlice } from "@reduxjs/toolkit";
//1. slice? initial state? reducer function?
export const initialState = {
  list: []
};

const lazyLoad = createSlice({
  name: "lazyload",
  initialState,
  reducers: {
    nextItem: (state, actions) => {
      state.list = actions.payload
    },
  }
});
export const { nextItem } = lazyLoad.actions;
export default lazyLoad.reducer;
