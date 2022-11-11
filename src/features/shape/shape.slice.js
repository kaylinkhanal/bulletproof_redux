import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  width: '30px',
  height:'20px',
  padding: '30px',
  backgroundColor: 'red'
};

const ShapeSlice = createSlice({
  name: "shape",
  initialState,
  reducers: {
    changeWidth: (state, actions) => {
        state.width= actions.payload + 'px'
    },

  }
});

export const { changeWidth} = ShapeSlice.actions;
export default ShapeSlice.reducer;
