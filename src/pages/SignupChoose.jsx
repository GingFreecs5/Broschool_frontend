import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";

import Footer from "../components/login/Footer";
import Header from "../components/login/Header";
import { useSelector } from 'react-redux'

export default function SignupChoose() {

  const config = useSelector((state) => state.language.configuration);
  const linkNames = useSelector((state) => state.language.linkNames);
  const { signupAsStudent, signupAsParent, signupAsTeacher } = config;
  const { signupAsStudentLink, signupParentLink, signupAsTeacherLink } = linkNames;
  return (
    <div className="d-flex flex-row  bgImg">
      <div className="loginContainer col-xxl-6 col-xl-7 col-lg-9 col-md-10 col-12  m-auto">
        <div className="card_container d-flex flex-column   gap-4  p-5  mx-3 ">
          <Header />
          <div className=" flex-wrap d-flex align-items-center flex-column gap-3">
            <MyButton
              bgColor={"#4D77E3"}
              color={"white"}
              link={signupAsStudentLink}
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
            <MyButton
              bgColor={"#4D77E3"}
              color={"white"}
              link={signupAsTeacherLink}
              text={signupAsTeacher}
              textSize={16}
              fontWeight={500}
              paddingY={"11px"}
              paddingX={"96px"}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
