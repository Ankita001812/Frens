import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid fw-bold">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span className="display-4 fw-bold"><i>FrEnS</i></span>
          
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <HomeRoundedIcon className="icon" />
            </li>
            <li className="nav-item">
              <GridViewRoundedIcon className="nav-icon" />
            </li>
          </ul>
          <form className="d-flex search-form">
            <SearchRoundedIcon className="icon search-icon" />
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
