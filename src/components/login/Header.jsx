import React from "react";
import Logo from "../Logo";
import MyButton from "./MyButton";
import { useSelector } from 'react-redux'

export default function Header() {
  const config = useSelector((state) => state.language.configuration);
  const { loginButton } = config;
  return (
    <div className="header_container gap-3 flex-wrap d-flex justify-content-between   ">
      <Logo />
      <MyButton
        bgColor={"#4D77E3"}
        color={"white"}
        text={loginButton}
        link={"/"}
        textSize={14}
        fontWeight={500}
        paddingY={"8px"}
        paddingX={"30px"}
      />
    </div>
  );
}
