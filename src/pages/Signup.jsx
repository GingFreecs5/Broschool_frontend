import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import ImgLearning from "../assets/loginImg1-removebg-preview 1 (1).png";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import {
  email,
  errorMessageCharacterSpecial,
  errorMessageEmailInvalid,
  errorMessageFiedlMaxSize,
  errorMessageFieldRequired,
  errorMessageLetterOnly,
  errorMessageMinimumCharacters,
  errorMessageMinimumLetter,
  errorMessageMinimumNumber,
  firstName,
  lastName,
  loginButton,
  password,
  signupText,
} from "../components/utils/LabelNames";
function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-row bgImg">
      <div className="loginContainer col-xxl-6 col-xl-7 col-lg-9 col-md-10 col-12   mx-auto ">
        <div className="card_container d-flex flex-column   gap-4  p-5 mx-3 ">
          <div className="header_container gap-3 flex-row flex-wrap d-flex justify-content-between   ">
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
          <div className="form_container flex-wrap d-flex justify-content-between flex-row ">
            <form
              onSubmit={handleSubmit(() => navigate("/signup/2"))}
              noValidate
            >
              <div className="d-flex mx-5  flex-row flex-column gap-3  ">
                <span
                  className="flex-column"
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                >
                  {signupText}
                </span>
                <div className="d-flex flex-column align-items-center gap-3">
                  <div>
                    <input
                      {...register("firstName", {
                        required: errorMessageFieldRequired,
                        maxLength: {
                          message: errorMessageFiedlMaxSize,
                          value: 20,
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: errorMessageLetterOnly,
                        },
                      })}
                      type="text"
                      style={{ borderRadius: "10px" }}
                      className=" flex-column form-control "
                      placeholder={firstName}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="firstName"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      {...register("lastName", {
                        required: errorMessageFieldRequired,
                        maxLength: {
                          message: errorMessageFiedlMaxSize,
                          value: 20,
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: errorMessageLetterOnly,
                        },
                      })}
                      type="text"
                      style={{ borderRadius: "10px" }}
                      className=" flex-column form-control "
                      placeholder={lastName}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="lastName"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      {...register("email", {
                        required: errorMessageFieldRequired,
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: errorMessageEmailInvalid,
                        },
                      })}
                      type="email"
                      style={{ borderRadius: "10px" }}
                      className=" flex-column form-control "
                      placeholder={email}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      {...register("password", {
                        required: errorMessageFieldRequired,
                        minLength: {
                          value: 8,
                          message: errorMessageMinimumCharacters,
                        },
                        validate: {
                          atLeastOneNumber: (value) =>
                            /\d/.test(value) || errorMessageMinimumNumber,
                          atLeastOneLetter: (value) =>
                            /[a-zA-Z]/.test(value) || errorMessageMinimumLetter,
                          atLeastOneSpecialCharacter: (value) =>
                            /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(
                              value
                            ) || errorMessageCharacterSpecial,
                        },
                      })}
                      type="password"
                      style={{ borderRadius: "10px" }}
                      className="flex-column form-control "
                      placeholder={password}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="password"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>

                  <div className="d-flex  ">
                    <MyButton
                      className={"flex-column "}
                      bgColor={"#4D77E3"}
                      color={"white"}
                      text={"Next"}
                      textSize={14}
                      fontWeight={500}
                      paddingY={"7px"}
                      paddingX={"30px"}
                      type={"submit"}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex-row ">
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

export default Signup;
