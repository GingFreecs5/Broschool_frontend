import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import ImgLearning from "../assets/shutterstock1067946317-1_750_1080-removebg-preview 1.png";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSelector } from 'react-redux'
import Footer from "../components/login/Footer";
import Header from "../components/login/Header";
export default function SignupAsTeacher2() {
  const config = useSelector((state) => state.language.configuration);
  const linkNames = useSelector((state) => state.language.linkNames);
  const { signupText, errorMessageFieldRequired, errorMessageMinimumCharacters,
    errorMessageMinimumNumber, password, email, addFiles, description,
    errorMessageEmailInvalid, errorMessageMinimumLetter, errorMessageCharacterSpecial,
    backButton, signupButton } = config;
  const { signupAsTeacherLink } = linkNames;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="d-flex  bgImg">
      <div className="loginContainer col-xxl-6 col-xl-7 col-lg-9 col-md-10 col-12  m-auto">
        <div className="card_container d-flex flex-column  gap-4  p-5 mx-3">
          <Header />
          <div className="form_container  d-flex justify-content-between  align-items-center  flex-row ">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="d-flex mx-5  flex-row flex-column gap-3  ">
                <span
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
                  <div className="d-flex flex-column ">
                    <label className="form-label" htmlFor="formFile">
                      {addFiles}
                    </label>
                    <input
                      {...register("files")}
                      className="form-control"
                      type="file"
                      id="formFile"
                      placeholder="CIN"
                      multiple
                    />
                    <ErrorMessage
                      errors={errors}
                      name="files"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div className="d-flex flex-column ">
                    <textarea
                      {...register("description", {
                        required: errorMessageFieldRequired,
                      })}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder={description}
                      style={{ maxHeight: 100 }}
                    ></textarea>

                    <ErrorMessage
                      errors={errors}
                      name="description"
                      render={({ message }) => (
                        <p className="error_alert">{message}</p>
                      )}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <MyButton
                      bgColor={"#4D77E3"}
                      color={"white"}
                      text={backButton}
                      link={signupAsTeacherLink}
                      textSize={14}
                      fontWeight={500}
                      paddingY={"7px"}
                      paddingX={"30px"}
                    />
                    <MyButton
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
