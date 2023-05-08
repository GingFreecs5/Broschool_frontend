import React from "react";

function Footer() {
  return (
    <div className="  flex-wrap align-items-baseline d-flex gap-3">
      <span
        style={{
          fontSize: 20,
        }}
      >
        &copy;
      </span>
      <p style={{ fontSize: 11 }}> Copyright Broschool 2023</p>{" "}
      <p style={{ fontSize: 11 }}> Terms And Conditions</p>{" "}
      <p style={{ fontSize: 11 }}> Privacy Policy</p>{" "}
      <p style={{ fontSize: 11 }}> Help</p>
    </div>
  );
}

export default Footer;
