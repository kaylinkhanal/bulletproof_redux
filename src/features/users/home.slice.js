import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
  favItem: ''
};

const home = createSlice({
  name: "home",
  initialState,
  reducers: {
    addProducts: (state, actions) => {
      state.products = actions.payload
    },
    setFavItem: (state, actions) => {
      state.favItem = actions.payload
    },
  }
});
export const { addProducts, setFavItem } = home.actions;
export default home.reducer;


