import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import ImgLearning from "../assets/shutterstock1067946317-1_750_1080-removebg-preview 1.png";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  backButton,
  phoneNumber,
  errorMessageFieldRequired,
  loginButton,
  residenceTown,
  schoolLevel,
  schoolName,
  signupButton,
  signupText,
  errorMessagePhoneNumber,
} from "../components/utils/LabelNames";
function SignupNext() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="d-flex flex-row bgImg">
      <div className="loginContainer col-xxl-5 col-xl-7 col-lg-9 col-md-10 col-12   mx-auto ">
        <div className="card_container d-flex flex-column  gap-4  p-5 mx-3">
          <div className="header_container gap-3 flex-row flex-wrap d-flex justify-content-between     ">
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
            <form onSubmit={handleSubmit(() => alert("logged"))} noValidate>
              <div className="d-flex  flex-row flex-column gap-3  ">
                <span
                  className="flex-column"
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                >
                  {signupText}
                </span>
                <div className="d-flex flex-column gap-3 ">
                  <div>
                    {" "}
                    <input
                      {...register("phoneNumber", {
                        required: errorMessageFieldRequired,
                        pattern: {
                          value: /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/,
                          message: errorMessagePhoneNumber,
                        },
                      })}
                      type="text"
                      style={{ borderRadius: "10px" }}
                      className=" flex-column form-control "
                      placeholder={phoneNumber}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="phoneNumber"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      {...register("residenceTown", {
                        required: errorMessageFieldRequired,
                      })}
                      type="text"
                      style={{ borderRadius: "10px" }}
                      className=" flex-column form-control "
                      placeholder={residenceTown}
                    />{" "}
                    <ErrorMessage
                      errors={errors}
                      name="residenceTown"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div>
                    <input
                      {...register("schoolName", {
                        required: errorMessageFieldRequired,
                      })}
                      type="text"
                      style={{ borderRadius: "10px" }}
                      className=" flex-column form-control "
                      placeholder={schoolName}
                    />{" "}
                    <ErrorMessage
                      errors={errors}
                      name="schoolName"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      {...register("schoolLevel", {
                        required: errorMessageFieldRequired,
                      })}
                      type="text"
                      style={{ borderRadius: "10px" }}
                      className="flex-column form-control "
                      placeholder={schoolLevel}
                    />{" "}
                    <ErrorMessage
                      errors={errors}
                      name="schoolLevel"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <MyButton
                      className={"flex-column"}
                      bgColor={"#4D77E3"}
                      color={"white"}
                      text={backButton}
                      link={"/signup/1"}
                      textSize={14}
                      fontWeight={500}
                      paddingY={"7px"}
                      paddingX={"30px"}
                    />
                    <MyButton
                      className={"flex-column"}
                      bgColor={"#4D77E3"}
                      color={"white"}
                      type={"submit"}
                      text={signupButton}
                      textSize={14}
                      fontWeight={500}
                      paddingY={"7px"}
                      paddingX={"30px"}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex-row  ">
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
