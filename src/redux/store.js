import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice.js";
import languageReducer from "./languageSlice.js";
export const store = configureStore({
  reducer: { auth: userReducer, language: languageReducer },
});
