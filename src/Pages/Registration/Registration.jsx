import React, { useState } from "react";
import "./Registration.css";
import icon from "../../images/icon.png";
import Footer from "../../Components/Footer/Footer";

const Registration = () => {
  const [singup, setSignup] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isSwapped, setSwapped] = useState(false);

  const swapBoxes = () => {
    setSwapped(!isSwapped);
    setSignup(!singup);
  };

  return (
    <>
      <div className="m-100 register-box">
        <div className="container">
          <div className={`registration-boxes ${isSwapped ? "swapped" : ""}`}>
            <div className={`box box1 border-${isSwapped ? "right" : "left"}`}>
              <img src={icon} alt="icon" />
              <h1 className="fw-bolder">
                {singup ? "Welcome Back!" : "Welcome To Cinemox!"}
              </h1>
              <p className="fw-semibold text-center fs-5">
                {singup
                  ? "So happy to see you again!"
                  : "To keep connected with us please sign up with your personal info"}
              </p>
              <button onClick={swapBoxes}>
                {singup ? "login" : "Sign Up"}
              </button>
            </div>
            <div className={`box box2 border-${isSwapped ? "left" : "right"}`}>
              <h1>{singup ? "Sign Up" : "Welcome Back!"}</h1>
              <ul className="d-flex justify-content-center mt-3 mb-5">
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fa-brands fa-google"></i>
                </li>
                <li>
                  <i className="fa-brands fa-apple"></i>
                </li>
              </ul>
              {forgotPassword ? (
                <button
                  className="back-btn"
                  onClick={() => setForgotPassword(false)}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              ) : (
                ""
              )}
              {forgotPassword ? (
                ""
              ) : (
                <p className="mb-3">or use emeil for registration</p>
              )}
              <div className="login-box">
                {singup ? (
                  <div className="mb-3">
                    <h6 className="text-start">Name</h6>
                    <div className="position-relative">
                      <input type="text" placeholder="Name" required />
                      <i className="fa-regular fa-user input-icon"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="mb-3">
                  <h6 className="text-start">Email</h6>
                  <div className="position-relative">
                    <input type="text" placeholder="Email" required />
                    <i className="fa-regular fa-envelope input-icon"></i>
                  </div>
                </div>
                {forgotPassword ? (
                  ""
                ) : (
                  <div className="mb-3">
                    <h6 className="text-start">Password</h6>
                    <div className="position-relative">
                      <input type="password" placeholder="Password" required />
                      <i className="fa-solid fa-lock input-icon"></i>
                    </div>
                    {singup ? (
                      ""
                    ) : (
                      <div className="text-start">
                        <button
                          className="forgot-password-btn"
                          onClick={() => setForgotPassword(true)}
                        >
                          Forgot Password?
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <br />
              <button className="login-btn">
                {singup
                  ? "Sign Up!"
                  : forgotPassword
                  ? "Request Code"
                  : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
