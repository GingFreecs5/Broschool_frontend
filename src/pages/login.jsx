import React from "react";
import "../App.css";
import MyButton from "../components/login/MyButton";
function Login() {
  return (
    <div className="bgImg">
      <div className="d-flex container loginContainer">
        <div className="card_class row card p-5  mx-auto ">
          <div className="container">
            <span
              className="row"
              style={{
                color: "#4680D6",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              Broschool
            </span>
            <MyButton
              className={"row my-3"}
              bgColor={"#4D77E3"}
              color={"white"}
              text={"Login"}
              paddingX={"30px"}
              paddingY={"3px"}
              textSize={17}
            />
            <MyButton
              className={"row"}
              bgColor={"#4D77E3"}
              color={"white"}
              text={"Register"}
              paddingX={"20px"}
              paddingY={"3px"}
              textSize={17}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
