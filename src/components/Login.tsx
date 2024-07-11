import React, { useState } from "react";
import logo from "../assets/logo.svg";
import img from "../assets/pablo-sign-in 1.svg";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@test.com" && password === "password") {
      try {
        navigate("/dashboard");
      } catch (err) {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="logo-header">
          <img src={logo} alt="logo" />
        </div>
        <div className="box">
          <div className="left">
            <img src={img} alt="sign-in" />
          </div>
          <div className="right">
            <div className="form-container">
              <div className="header">
                <h1>Welcome! </h1>
                <span>Enter details to login.</span>
              </div>

              <form className="form" onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span>SHOW</span>
                  <p>FORGOT PASSWORD?</p>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">LOG IN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
