import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    resetAuthState: (state) => {
      state.loading = false;
      state.userInfo = {};
      state.userToken = null;
      state.error = null;
      state.success = false;
    },
  },
});

export const {
  setUser,
  setUserToken,
  setLoading,
  setError,
  setSuccess,
  resetAuthState,
} = authSlice.actions;

export default authSlice.reducer;
