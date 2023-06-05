import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const info = {
  useremail: "info@example.com",
  userpass: "info1234",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const [icon, setIcon] = useState("fa-solid fa-eye");
  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const eye = () => {
    if (icon === "fa-solid fa-eye") {
      setIcon("fa-solid fa-eye-slash");
      setType("text");
    } else {
      setIcon("fa-solid fa-eye");
      setType("password");
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setAlertText("please, fill this input");
      setAlertColor("text-warning");
    } else if (email === info.useremail && pass === info.userpass) {
      setAlertText("Login is successfull");
      setAlertColor("text-success");
      navigate("/dashboard");
    } else {
      setAlertText("password or email is wrong!");
      setAlertColor("text-danger");
    }
  };
  return (
    <div className="container login h-100">
      <div className="row g-3 h-100">
        <div className="col-sm-12 col-md-7">
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg"
            alt=""
          />
        </div>
        <div className="col-sm-12 col-md-5 vh-100 d-flex flex-column justify-content-center">
          <h5 className={`${alertColor}`}>{alertText}</h5>
          <h4 className="text-center text-white">Login</h4>
          <Form onSubmit={loginSubmit}>
            <div className="my-3">
              <label className="form-label text-white">
                Username or Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
              />
            </div>
            <label className="form-label text-white">Password</label>
            <br />
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                type={type}
                className="form-control"
              />
              <button onClick={eye} className="btn btn-outline-secondary">
                <i className={icon}></i>
              </button>
            </div>
            <div className="mb-3 d-flex form-check p-0 justify-content-between">
              <button type="submit" className="btn btn-info text-white">
                Login
              </button>
              <div className="d-flex justify-content-center align-items-center">
                <input type="checkbox" className="form-check-input me-2" />
                <label className="form-check-label text-white">
                  Remember me
                </label>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
