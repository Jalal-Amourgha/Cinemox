import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import icon from "../../images/icon.PNG";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-fixed ">
      <div className="container">
        <Link to="/">
          <img src={icon} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0 text-center">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Watchlist" className="link">
                Watchlist
              </Link>
            </li>
            <li className="text-white">
              <Link to="/Registration" className="link">
                Registration
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
