import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
import ImgLearning from "../assets/elearning-portals-cover-picture 1.png";
function Login() {
  return (
    <div className="bgImg">
      <div className="d-flex loginContainer">
        <div className="card_class mt-5 gap-5  card p-5   mx-auto ">
          <div className=" row align-items-stretch  ">
            <span
              className="col"
              style={{
                color: "#4680D6",
                fontWeight: 800,
                fontSize: 30,
                lineHeight: "24px",
              }}
            >
              Broschool
            </span>
            <MyButton
              className={"col"}
              bgColor={"#4D77E3"}
              color={"white"}
              text={"Register"}
              textSize={17}
            />
          </div>
          <div className="d-flex row">
            <div className="row flex-column gap-3 justify-content-center align-items-center ">
              <span
                className="col"
                style={{
                  color: "#000000",

                  fontSize: 20,
                  lineHeight: "24px",
                }}
              >
                Login to your account
              </span>
              <input
                type="email"
                className=" col form-control rounded"
                placeholder="Enter email"
              ></input>
              <input
                type="email"
                className="col form-control rounded"
                placeholder="Enter email"
              ></input>
            </div>
            <div className="row ">
              <img
                src={ImgLearning}
                alt="ImgLearning"
                style={{ height: 180, width: 180 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
