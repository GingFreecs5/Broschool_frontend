import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    show: (state, { payload }) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { show } = authSlice.actions;

export default authSlice.reducer;
