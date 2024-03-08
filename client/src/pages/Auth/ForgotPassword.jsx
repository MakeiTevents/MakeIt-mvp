import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logIn, signUp } from "../../actions/AuthActions.js";
import "./Authe.css";
import "./Auth.css";
import "./AuthOne.css";
import fest from "../../img/festivities.svg";
import forgotimg from "../../img/forgot_password.svg";
import axios from 'axios'

const ForgotPassword  = () => {
    const [email, setEmail] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/auth/forgot-password', {email})
        .then(res => {
            if(res.data.Status) {
              alert("Please check your email for reset password link")
                navigate('/auth')
               
            }
        }).catch(err => console.log(err))
    }

  return (
    <div className="Auth">
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="infoForm authForm" onSubmit={handleSubmit}>
              <h3>Forgot Password </h3>
                <div>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="infoInput"
                    name="email"
                    autocomplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              <Link
              to="/auth"
              style={{
                fontSize: "12px",
                cursor: "pointer",
                fontWeight:"bold",
                justifyContent:"end",
                marginLeft:"12rem",
                textDecoration:"none"
              }}
            >
                Back to Login
            </Link>
              <div>
                <div>
                <button
                  className="button infoButton"
                  type="Submit"
                >
                  Send
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content" style={{marginRight:"5rem"}}>
              <h3>Forgot Your Password ?</h3>
              {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p> */}
              {/* <button
                className="button infoButton "
                id="signUp"
                onClick={() => {
                  handleSignUpClick();
                  resetForm();
                  setIsSignUp((prev) => !prev);
                }}
              >
                Sign Up
              </button> */}
            </div>
            <img src={forgotimg} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p> */}
              {/* <button
                className="button infoButton"
                id="signIn"
                onClick={() => {
                  handleSignInClick();
                  resetForm();
                  setIsSignUp((prev) => !prev);
                }}
              >
                Sign In
              </button> */}
            </div>
            {/* <img src={amu} className="image" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword ;
