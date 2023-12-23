import React from "react";
import "./contact.css";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="container m-100">
        <h1 className="text-center mt-5 mb-5">Contact Us</h1>
        <div className="contact-boxes">
          <div className="socials-box border-left">
            <h3 className="mb-2">Let's get in touch</h3>
            <p>We're open for any suggestion or just to have a chat.</p>
            <div className="d-flex align-items-center mb-3 mt-5">
              <i className="fa-solid fa-phone"></i>
              <p>+212 668 77 77 77</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fa-solid fa-location-dot"></i>
              <p>Tetouan, Morocco</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fa-solid fa-envelope"></i>
              <p>raitingmovies@support.com</p>
            </div>
            <ul className="mt-5">
              <li>
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-x-twitter"></i>
              </li>
            </ul>
          </div>
          <div className="contact-box text-center border-right">
            <form
              action="https://formsubmit.co/2bb4b50d4b3676e79e3d46764fbce9e8"
              method="POST"
            >
              <div className="position-relative">
                <input
                  type="text"
                  name="Name"
                  placeholder="Full Name"
                  required
                />
                <i className="fa-regular fa-user input-icon"></i>
              </div>
              <div className="position-relative">
                <input type="email" name="Email" placeholder="Email" required />
                <i className="fa-regular fa-envelope input-icon"></i>
              </div>
              <textarea
                name="Message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <br />
              <button type="submit">Send</button>
            </form>
            <span className="arrow"></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
