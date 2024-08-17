import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="display-6 fw-bold">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <HomeRoundedIcon className="icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/grid" className="nav-link">
                <GridViewRoundedIcon className="icon" />
              </Link>
            </li>
            <li className="nav-item">
              <div className="d-flex ">
                <div className="input-group w-auto">
                  <input
                    className="form-control bg-dark text-light"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <span className="input-group-text bg-dark border-0">
                    <SearchRoundedIcon
                      className="search-icon"
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </span>
                </div>
              </div>
            </li>
          </ul>

          <div className="d-flex ms-auto ">
            <PersonOutlineOutlinedIcon style={{ color: "yellow" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
