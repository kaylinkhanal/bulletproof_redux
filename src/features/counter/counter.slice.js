import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. 

// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    }
  }
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
