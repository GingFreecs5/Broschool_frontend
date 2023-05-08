import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import {
  loginButton,
  loginLink,
  signupAsParent,
  signupAsStudent,
  signupFirstLink,
  signupParentLink,
} from "../utils/LabelNames";
import Logo from "../components/Logo";
import Footer from "../components/login/Footer";

function SignupChoose() {
  return (
    <div className="d-flex flex-row  bgImg">
      <div className="loginContainer col-xxl-6 col-xl-7 col-lg-9 col-md-10 col-12 mx-auto ">
        <div className="card_container d-flex flex-column   gap-4  p-5  mx-3 ">
          <div className=" header_container gap-3 flex-row flex-wrap d-flex justify-content-between   ">
            <Logo />
            <MyButton
              bgColor={"#4D77E3"}
              color={"white"}
              link={loginLink}
              text={loginButton}
              textSize={14}
              fontWeight={500}
              paddingY={"8px"}
              paddingX={"30px"}
            />
          </div>
          <div className=" flex-wrap d-flex align-items-center flex-column gap-3">
            <MyButton
              bgColor={"#4D77E3"}
              color={"white"}
              link={signupFirstLink}
              text={signupAsStudent}
              textSize={16}
              fontWeight={500}
              paddingY={"11px"}
              paddingX={"96px"}
            />
            <MyButton
              bgColor={"#4D77E3"}
              color={"white"}
              link={signupParentLink}
              text={signupAsParent}
              textSize={16}
              fontWeight={500}
              paddingY={"11px"}
              paddingX={"70px"}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SignupChoose;
