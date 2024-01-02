import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import icon from "../../images/icon.png";

const Footer = () => {
  return (
    <div className="footer mt-5 bg-black">
      <div className="container">
        <div className="row text-center-xsm">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xsm-12 mb-md-5 footer-box">
            <img src={icon} alt="icon" />
            <p>
              Cinemox is hub for rating and reviewing your favorite TV shows,
              movies, and animes.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xsm-12 mb-md-5 footer-box">
            <h3>Explore</h3>
            <ul className="list-group">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Watchlist" className="footer-link">
                  Watchlist
                </Link>
              </li>
              <li>
                <Link to="/Registration" className="footer-link">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xsm-12  footer-box">
            <h3>Socials</h3>
            <ul>
              <li className="footer-link">Facebook</li>
              <li className="footer-link">Instagram</li>
              <li className="footer-link">Twitter</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xsm-12  footer-box">
            <h3>Contact</h3>
            <p>Tetouan, Morocco</p>
            <div className="d-flex align-items-center mt-3 mb-3">
              <i className="fa-solid fa-phone"></i>
              <p>+212 668 77 77 77</p>
            </div>
            <div className="d-flex align-items-center  mb-3">
              <i className="fa-solid fa-envelope me-3"></i>
              <p>raitingmovies@support.com</p>
            </div>
          </div>
          <h6 className="text-center mt-5">
            &copy; Created By
            <span>Jalal Amourgha</span>
            <i className="fa-solid fa-heart fs-6"></i>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
