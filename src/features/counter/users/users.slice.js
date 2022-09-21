import { createSlice } from "@reduxjs/toolkit";

 const initialState = { 
  name: 'kaylin',
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
        state.name = ''
    },
    assignName:  (state, actions) => {
        state.name = actions.payload.toString()
    },
  }
});

export const { reset, assignName } = usersSlice.actions;
export default usersSlice.reducer;
