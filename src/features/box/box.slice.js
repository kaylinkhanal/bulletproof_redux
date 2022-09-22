import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  width: '30px',
  height:'20px',
  padding: '30px',
  backgroundColor: 'red'
};

const BoxSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    changeWidth: (state, actions) => {
        state.width= actions.payload + 'px'
    },

  }
});

export const { changeWidth} = BoxSlice.actions;
export default BoxSlice.reducer;
