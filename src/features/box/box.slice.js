import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  width: '30px',
  height:'20px',
  padding: '30px',
  backgroundColor: 'red',
  borderRadius: '0%'
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
  changeColor: (state, actions) => {
    state.backgroundColor= actions.payload
},
changeShape:  (state, actions) => {
  state.borderRadius= '50%'
},
  }
});

export const { changeWidth,changeHeight,changeColor,changeShape} = BoxSlice.actions;
export default BoxSlice.reducer;
