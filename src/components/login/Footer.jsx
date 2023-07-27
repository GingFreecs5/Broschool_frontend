import React from "react";
import ChooseLanguage from "../ChooseLanguage";
import "../../App.css"

function Footer() {
  return (
    <div className=" mx-5 footer_container flex-wrap align-items-baseline d-flex  gap-3">
   
      <p style={{ fontSize: 11 }}>    <span
        style={{
          fontSize: 20,
        }}
      >
        &copy;
      </span> Copyright Broschool 2023</p>{" "}
      <p style={{ fontSize: 11 }}> Terms And Conditions</p>{" "}
      <p style={{ fontSize: 11 }}> Privacy Policy</p>{" "}
      <p style={{ fontSize: 11 }}> Help</p>
        <ChooseLanguage/>
    </div>
  );
}

export default Footer;
