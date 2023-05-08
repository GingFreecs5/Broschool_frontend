import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import ImgLearning from "../assets/loginImg1-removebg-preview 1 (1).png";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import {
  phoneNumber,
  errorMessageFiedlMaxSize,
  errorMessageFieldRequired,
  errorMessageLetterOnly,
  firstName,
  lastName,
  loginButton,
  errorMessagePhoneNumber,
  signupSecondLink,
  signupText,
  age,
} from "../utils/LabelNames";
import Footer from "../components/login/Footer";
function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  return (
    <div className="d-flex bgImg">
      <div className="loginContainer col-xxl-6 col-xl-7 col-lg-9 col-md-10 col-12   mx-auto ">
        <div className="card_container d-flex flex-column   gap-4  p-5 mx-3 ">
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
          <div className="form_container flex-wrap d-flex justify-content-between align-items-center">
            <form
              onSubmit={handleSubmit(() => navigate(signupSecondLink))}
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
                      {...register("age", {
                        required: errorMessageFieldRequired,
                        maxLength: {
                          message: errorMessageFiedlMaxSize,
                          value: 3,
                        },
                      })}
                      type="number"
                      style={{ borderRadius: "10px" }}
                      className=" form-control "
                      defaultValue={"25"}
                      placeholder={age}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="age"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div
                    className=" d-flex w-100 btn-group justify-content-between"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <div>
                      {" "}
                      <input
                        type="radio"
                        className=" btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autocomplete="off"
                        checked
                      />
                      <label
                        className=" btn btn-outline-secondary "
                        for="btnradio1"
                      >
                        Male
                      </label>
                    </div>
                    <div>
                      {" "}
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-secondary"
                        for="btnradio2"
                      >
                        Female
                      </label>
                    </div>
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
                  <div className="d-flex  ">
                    <MyButton
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

export default Signup;
