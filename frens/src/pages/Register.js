import React from "react";
import bg from "../images/fbg.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container-bg">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100 ">
          <div className="col-6 " >
            <form className="w-75 bg-white p-4 rounded">
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="pass"
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div
            className="col-6 text-white position-relative"
            
          >
            <img src={bg} alt="background" className="bg-img-left" />
            <div className="content">
              <h1 className="fw-bold">Hello world!</h1>
              <p className="lead">
                Want to know what's going on in your friends' lives? Stay
                connected with your friends.
              </p>
              <span>Already have an account? </span>
              <Link to="/login">
                <button type="submit" className="btn btn-outline-info">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
