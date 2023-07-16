import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import ImgLearning from "../assets/loginImg1-removebg-preview 1 (1).png";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  errorMessageMinimumCharacters,
  email,
  errorMessageCharacterSpecial,
  errorMessageEmailInvalid,
  password,
  errorMessageMinimumLetter,
  errorMessageMinimumNumber,
  phoneNumber,
  errorMessageFiedlMaxSize,
  errorMessageFieldRequired,
  errorMessageLetterOnly,
  firstName,
  lastName,
  errorMessagePhoneNumber,
  signupText,
  signupButton,
} from "../utils/LabelNames";
import Footer from "../components/login/Footer";
import Header from "../components/login/Header";
export default function SignupAsParent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="d-flex bgImg">
      <div className="loginContainer col-xxl-6 col-xl-7 col-lg-9 col-md-10 col-12   m-auto ">
        <div className="card_container d-flex flex-column   gap-4  p-5 mx-3 ">
          <Header />
          <div className="form_container flex-wrap d-flex justify-content-between align-items-center">
            <form
              onSubmit={handleSubmit(() => alert("Parent Account created"))}
              noValidate
            >
              <div className="d-flex mx-5  flex-column gap-3  ">
                <span
                  className="flex-column"
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                >
                  {signupText}
                </span>
                <div className="d-flex  flex-column align-items-center gap-3">
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
                      className=" form-control "
                      placeholder={firstName}
                      defaultValue={"Yassin"}
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
                      defaultValue={"Akkab"}
                      type="text"
                      style={{ borderRadius: "10px" }}
                      className=" form-control "
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
                      {...register("phoneNumber", {
                        required: errorMessageFieldRequired,
                        pattern: {
                          value: /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/,
                          message: errorMessagePhoneNumber,
                        },
                      })}
                      type="text"
                      style={{ borderRadius: "10px" }}
                      className=" form-control "
                      placeholder={phoneNumber}
                      defaultValue={"0653500709"}
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
                      className="  form-control "
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
                      className="form-control "
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
                      bgColor={"#4D77E3"}
                      color={"white"}
                      text={signupButton}
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
            <div>
              <img
                className="imgClass"
                src={ImgLearning}
                alt="ImgLearning"
                style={{ height: "auto", width: "100%", marginTop: 20 }}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
