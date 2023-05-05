import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import {
  email,
  errorMessageFieldRequired,
  loginText,
  password,
  signupButton,
} from "../components/utils/LabelNames";
import ImgLearning from "../assets/elearning-portals-cover-picture 1.png";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="d-flex flex-row  bgImg">
      <div className="loginContainer col-xxl-6 col-xl-7 col-lg-9 col-md-10 col-12 mx-auto ">
        <div className="card_container d-flex flex-column   gap-4  p-5  mx-3 ">
          <div className=" header_container gap-3 flex-row flex-wrap d-flex justify-content-between   ">
            <Logo className={"flex-column"} />
            <MyButton
              className={"flex-column"}
              bgColor={"#4D77E3"}
              color={"white"}
              link={"/Signup/1"}
              text={signupButton}
              textSize={14}
              fontWeight={500}
              paddingY={"8px"}
              paddingX={"30px"}
            />
          </div>
          <div className="form_container flex-wrap d-flex justify-content-between  align-items-center flex-row ">
            <form onSubmit={handleSubmit(() => alert("hello"))}>
              <div className="d-flex mx-5  flex-row flex-column gap-3  ">
                <span
                  className="flex-column"
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                >
                  {loginText}
                </span>
                <input
                  {...register("email", {
                    required: errorMessageFieldRequired,
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

                <div className="valid-feedback">Looks good!</div>
                <input
                  {...register("password", {
                    required: errorMessageFieldRequired,
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
                <div className="d-flex align-items-center gap-3">
                  <a
                    href="/"
                    style={{
                      color: "gray",
                      textDecoration: "none",
                      fontSize: 15,
                    }}
                  >
                    Forget password ?
                  </a>
                  <MyButton
                    className={"flex-column"}
                    bgColor={"#4D77E3"}
                    color={"white"}
                    text={"Login"}
                    textSize={14}
                    fontWeight={500}
                    type={"submit"}
                    paddingY={"7px"}
                    paddingX={"30px"}
                  />
                </div>
              </div>
            </form>
            <div className="flex-row ">
              <img
                className="imgClass"
                src={ImgLearning}
                alt="ImgLearning"
                style={{ height: "auto", width: "100%" }}
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

export default Login;
