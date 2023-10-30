import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../redux/languageSlice';
import './ChooseLanguage.css'; // Import your custom CSS file

export default function ChooseLanguage() {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  return (
    <div className="">
      <select
        value={language}
        onChange={(e) => dispatch(changeLanguage(e.target.value))}
        className="custom-select" // Apply custom styling class to the select element
      >
        <option value="EN">English</option>
        <option value="FR">French</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
}
