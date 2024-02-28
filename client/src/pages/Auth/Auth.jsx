import React, { useState } from "react";
import "./Authe.css";
import "./Auth.css";
import "./AuthOne.css";
import fest from "../../img/festivities.svg";
import amu from "../../img/amusement.svg";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // const dispatch = useDispatch()

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className="Auth">
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="infoForm authForm" onSubmit={handleSubmit}>
              <h3>{isSignUp ? "Register" : "Login"}</h3>
              {isSignUp && (
                <div>
                  {/* <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              /> */}
                  <input
                    required
                    type="text"
                    placeholder="Email"
                    className="infoInput"
                    name="email"
                    autocomplete="off"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div>
                <input
                  required
                  type="text"
                  placeholder="Username"
                  className="infoInput"
                  name="username"
                  autocomplete="off"
                  value={data.username}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  required
                  type="password"
                  className="infoInput"
                  placeholder="Password"
                  name="password"
                  autocomplete="off"
                  value={data.password}
                  onChange={handleChange}
                />
                {isSignUp && (
                  <input
                    required
                    type="password"
                    className="infoInput"
                    name="confirmpass"
                    autocomplete="off"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                )}
              </div>
              <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                fontWeight:"bold",
                justifyContent:"end",
                marginLeft:"12rem"
              }}
            >
              {isSignUp
                ? ""
                : "Forgot Password ?"}
            </span>
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  alignSelf: "flex-end",
                  marginRight: "5px",
                  display: confirmPass ? "none" : "block",
                }}
              >
                *Confirm password is not same
              </span>
              <div>
                
                <div>
                <button
                  className="button infoButton"
                  type="Submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content" style={{marginRight:"5rem"}}>
              <h3>New here ?</h3>
              {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p> */}
              <button
                className="button infoButton "
                id="signUp"
                onClick={() => {
                  handleSignUpClick();
                  resetForm();
                  setIsSignUp((prev) => !prev);
                }}
              >
                Sign Up
              </button>
            </div>
            <img src={fest} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p> */}
              <button
                className="button infoButton"
                id="signIn"
                onClick={() => {
                  handleSignInClick();
                  resetForm();
                  setIsSignUp((prev) => !prev);
                }}
              >
                Sign In
              </button>
            </div>
            <img src={amu} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
