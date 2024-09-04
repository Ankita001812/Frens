import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./Nav.css";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { DarkModeContext } from "../context/DarkModeContext"; 
import { useContext } from "react";


const Nav = () => {
  const { darkMode, toggle } = useContext(DarkModeContext); 
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid" style={{ color: darkMode ? "white" : "black" }}>
        <Link to="/" className="navbar-brand">
          <span className="display-4 fw-bold">
            <i>FrEnS</i>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <HomeRoundedIcon className="icon" style={{ fontSize: "40px", color: darkMode ? "white" : "black" }} />
              </Link>
            </li>
            <li className="nav-item">
              
                {/* Dark Mode Toggle Button */}
              <button
                onClick={toggle} // Trigger the toggle function when the button is clicked
                className="btn btn-dark"
              >
                <DarkModeRoundedIcon className="icon" style={{ fontSize: "40px", color: darkMode ? "white" : "black" }} />
              </button>
              
            </li>
            <li className="nav-item">
              <Link to="/grid" className="nav-link">
                <GridViewRoundedIcon className="icon" style={{ fontSize: "40px", color: darkMode ? "white" : "black" }} />
              </Link>
            </li>
            <li className="nav-item">
              <div className="d-flex justify-content-center">
                <div className="input-group " style={{marginLeft: "20px"}}>
                  <input
                    className="form-control bg-dark text-light"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <span className="input-group-text bg-dark border-0">
                    <SearchRoundedIcon
                      className="search-icon"
                      style={{ color: "white", fontSize: "40px" }}
                    />
                  </span>
                </div>
              </div>
            </li>
          </ul>

          <div className="d-flex ms-auto align-items-center">
            <PersonOutlineOutlinedIcon style={{ color: "yellow", fontSize: "40px" }} />
            <span style={{ color: "white", fontSize: "22px" }}>user name</span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
