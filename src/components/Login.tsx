import React from "react";
import logo from "../assets/logo.svg";
import img from "../assets/pablo-sign-in 1.svg";

const Login = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>{" "}
      <div className="box">
        {" "}
        <div className="left">
          {" "}
          <div className="left-logo">
            {" "}
            <div className="loginImg">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="form">
          <div className="form-container">
            <div className="header">
              <h1>Welcome! </h1>
              <span>Enter details to login.</span>
            </div>

            <form>
              <div className="form-group">
                <input placeholder="Email" type="text" />
              </div>
              <div className="form-group">
                <input placeholder="Password" type="password" />{" "}
                <span>SHOW</span>
                <p>FORGOT PASSWORD?</p>
              </div>
              <button>LOG IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
