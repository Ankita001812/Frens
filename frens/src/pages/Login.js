import React, { useState } from "react";
import bg from "../images/fbg.jpg";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const initUser = { email: "", pass: "" };
  const [val, setVal] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exist = JSON.parse(localStorage.getItem("fusers")) || [];
    console.log(exist);
    let user = null;
    for (let i = 0; i < exist.length; i++) {
      if (exist[i].email === val.email && exist[i].pass === val.pass) {
        user = exist[i];
        break;
      }
    }




    console.log("log in successful!");
    alert('LogIn successful !')
    
  };
  return (
    <div className="container-bg">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100 ">
          <div
            className="col-6  align-items-start text-white position-relative"
            style={{ marginright: "0px" }}
          >
            <img src={bg} alt="background" className="bg-img-left" />
            <div className="content">
              <h1 className="fw-bold">Hello world!</h1>
              <p className="lead">
                Want to know what's going on in your friends' lives? Stay
                connected with your friends.
              </p>
              <span>Don't have an account? </span>
              <Link to="/register">
                <button type="submit" className="btn btn-outline-info">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="col-6 " style={{ paddingLeft: "0px" }}>
            <form className="w-75 bg-white p-4 rounded" onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={val.email}
                  onChange={handleChange}
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
                  value={val.pass}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
