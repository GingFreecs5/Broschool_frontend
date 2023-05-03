import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import ImgLearning from "../assets/shutterstock1067946317-1_750_1080-removebg-preview 1.png";
import Logo from "../components/Logo";
import {
  birthDate,
  loginButton,
  residenceTown,
  schoolLevel,
  schoolName,
  signupButton,
} from "../components/utils/LabelNames";
function SignupNext() {
  return (
    <div className="d-flex flex-row bgImg">
      <div className="loginContainer  mx-auto ">
        <div className="card_class d-flex flex-column flex-wrap  gap-4  p-5">
          <div className=" flex-row flex-wrap d-flex justify-content-between   ">
            <Logo className={"flex-column"} />
            <MyButton
              className={"flex-column"}
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
          <div className="form_container flex-wrap d-flex justify-content-between  align-items-center  flex-row ">
            <div className="d-flex mx-5  flex-row flex-column gap-3  ">
              <span
                className="flex-column"
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                }}
              >
                Sign up
              </span>
              <div className="d-flex flex-column gap-3 align-items-center">
                <input
                  type="text"
                  style={{ borderRadius: "10px" }}
                  className=" flex-column form-control "
                  placeholder={birthDate}
                ></input>
                <input
                  type="text"
                  style={{ borderRadius: "10px" }}
                  className=" flex-column form-control "
                  placeholder={residenceTown}
                ></input>
                <input
                  type="text"
                  style={{ borderRadius: "10px" }}
                  className=" flex-column form-control "
                  placeholder={schoolName}
                ></input>
                <input
                  type="text"
                  style={{ borderRadius: "10px" }}
                  className="flex-column form-control "
                  placeholder={schoolLevel}
                ></input>
                <div className="d-flex align-items-center gap-3">
                  <MyButton
                    className={"flex-column"}
                    bgColor={"#4D77E3"}
                    color={"white"}
                    text={signupButton}
                    textSize={14}
                    fontWeight={500}
                    paddingY={"7px"}
                    paddingX={"30px"}
                  />
                </div>
              </div>
            </div>
            <div className="flex-row mx-5 ">
              <img
                className="imgClass"
                src={ImgLearning}
                alt="ImgLearning"
                style={{ height: "auto", width: "100%", marginTop: 20 }}
              />
            </div>
          </div>
          <div className=" flex-row flex-wrap align-items-baseline d-flex gap-3">
            <div className="flex-column">
              <span
                style={{
                  fontSize: 20,
                }}
              >
                &copy;
              </span>
            </div>
            <div className="flex-column">
              {" "}
              <p style={{ fontSize: 11 }}> Copyright Broschool 2023</p>
            </div>
            <div className="flex-column">
              {" "}
              <p style={{ fontSize: 11 }}> Terms And Conditions</p>{" "}
            </div>
            <div className="flex-column">
              {" "}
              <p style={{ fontSize: 11 }}> Privacy Policy</p>
            </div>
            <div className="flex-column">
              {" "}
              <p style={{ fontSize: 11 }}> Help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupNext;
