import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  width: '30px',
  height:'20px',
  padding: '30px',
  borderRadius: '0px',
  backgroundColor: 'red'
};

const BoxSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    changeWidth: (state, actions) => {
        state.width= actions.payload + 'px'
    },
    changeHeight: (state, actions) => {
      state.height= actions.payload + 'px'
  },
  changeShape: (state, actions) => {
    state.borderRadius= '50%'
},
  }
});

export const { changeWidth,changeHeight,changeShape} = BoxSlice.actions;
export default BoxSlice.reducer;
