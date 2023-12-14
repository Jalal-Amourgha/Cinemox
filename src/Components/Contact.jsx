import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-box">
          <h1 className="mb-3">
            Contact <span>Me</span>
          </h1>
          <form
            action="https://formsubmit.co/2bb4b50d4b3676e79e3d46764fbce9e8"
            method="POST"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="input-style"
              required
            />
            <br />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="input-style"
              required
            />
            <br />
            <textarea
              name="Message"
              rows="5"
              placeholder="Your Message ..."
              required
            ></textarea>
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
      <div className="created">
        <h6>
          &copy; Created By
          <span className="fst-italic me-6">Jalal Amourgha</span>
          <i className="fa-solid fa-heart fs-6"></i>
        </h6>
      </div>
    </>
  );
};

export default Contact;
