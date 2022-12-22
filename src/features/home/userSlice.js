import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "hari"
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
 
  }
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
