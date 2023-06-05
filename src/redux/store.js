import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice.js";
export const store = configureStore({
  reducer: { auth: userReducer },
});
