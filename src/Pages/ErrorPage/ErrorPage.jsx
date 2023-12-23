import React from "react";
import "./error.css";
import error from "../../images/404.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container text-center">
        <div className="error-img-box">
          <img src={error} alt="Error 404" />
        </div>

        <h1>Oops!</h1>
        <h6>We can't seem to find page you are looking for</h6>
        <Link to="/" className="error-btn">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
