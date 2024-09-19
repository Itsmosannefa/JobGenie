import React from "react";
import "./contact.css"; // Import the CSS file

const Contact = () => {
  return (
    
    <div className="container">
      <div className="form">
        <div className="contact-form">
          <form>
            <h2 className="title">Contact Us</h2>
            <div className="input-container">
              <input type="text" className="input" required />
              <label>Name</label>
              <span></span>
            </div>
            <div className="input-container">
              <input type="email" className="input" required />
              <label>Email</label>
              <span></span>
            </div>
            <div className="input-container textarea">
              <textarea className="input" required></textarea>
              <label>Message</label>
              <span></span>
            </div>
            <button type="submit" className="btn">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <h2 className="title">Get in touch</h2>
          <p className="text">
            We'd love to hear from you! Send us a message and we'll get back to
            you as soon as possible.
          </p>
          <div className="information">
            <img src="./assets/location.png" alt="icon" className="icon" />
            <p>Your address here</p>
          </div>
          <div className="information">
            <img src="./assets/phone.png" alt="icon" className="icon" />
            <p>+123 456 789</p>
          </div>
          <div className="information">
            <img src="./assets/email.png" alt="icon" className="icon" />
            <p>email@domain.com</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;
