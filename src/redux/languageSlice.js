import { createSlice } from "@reduxjs/toolkit";
import {frenshConfig,englishConfig} from "../utils/labesNames";
import {linkNames} from "../utils/linkNames";
const initialState = {
  language: "EN",
  configuration : englishConfig,
  linkNames:linkNames
  
};
const {firstName}=englishConfig;
console.log(firstName);
export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage : (state,{payload})=>{
      state.language=payload;
      if(payload==="FR"){
        state.configuration=frenshConfig;
      }else{
        state.configuration=englishConfig;
      }
    },
  },
});

export default languageSlice.reducer;
export const {changeLanguage}=languageSlice.actions;