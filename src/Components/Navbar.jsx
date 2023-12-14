import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.PNG";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const chnageMode = () => {
    if (darkMode) {
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--text-color", "#191d2b");
      document.querySelector("body").style.backgroundColor = "#ffffff";
      setDarkMode(false);
    } else {
      root.style.setProperty("--bg-color", "#191d2b");
      root.style.setProperty("--text-color", "#ffffff");
      document.querySelector("body").style.backgroundColor = "#191d2b";
      setDarkMode(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
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
              <Link to="/MyRates" className="link">
                My Rates
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </li>
            <li className="text-white">
              <button onClick={() => chnageMode()}>
                <i className="fa-solid fa-moon fs-5"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
