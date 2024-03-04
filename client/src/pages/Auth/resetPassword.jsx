import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams  } from "react-router-dom";
import { logIn, signUp } from "../../actions/AuthActions.js";
import "./Authe.css";
import "./Auth.css";
import "./AuthOne.css";
import resetimg from "../../img/reset.svg";
import axios from 'axios'

const ResetPassword  = () => {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const {id, token} = useParams()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/auth/reset-password/${id}/${token}`, {password})
        .then(res => {
            if(res.data.Status === "Success") {
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
              <h3>Reset Password </h3>
                <div>
                  <input
                    required
                    type="password"
                    placeholder="Enter Password"
                    className="infoInput"
                    name="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              <div>
                
                <div>
                <button
                  className="button infoButton"
                  type="Submit"
                >
                  Update
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content" style={{marginRight:"5rem"}}>
              <h3>Reset Your Password ?</h3>
            </div>
            <img src={resetimg} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword ;
