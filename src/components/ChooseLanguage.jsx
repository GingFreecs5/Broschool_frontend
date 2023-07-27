import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from "../redux/languageSlice"
export default function ChooseLanguage() {
  const language = useSelector((state) => state.language.language);

  const dispatch = useDispatch();
  console.log(language + "123")
  return (
    <div className="">
      <select value={language} onChange={(e) => dispatch(changeLanguage(e.target.value))}>

        <option value="EN">English</option>

        <option value="FR">French</option>

      </select>
    </div>
  )
}
