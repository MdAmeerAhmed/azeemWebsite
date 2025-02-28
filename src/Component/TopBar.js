import React from "react";
import "./TopBar.css";  // Import external CSS file
const TopBar = () => {
  return (
    <div className="container-fluid bg-dark py-2 d-none d-md-flex">
      <div className="container">
        <div className="d-flex justify-content-between topbar">
          
          {/* Left: Contact Info */}
          <div className="top-link">
            <a href="https://www.facebook.com" className="bg-light nav-fill btn btn-sm btn-sm-square rounded-circle " target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook text-primary "></i>
            </a>
            <a href="https://www.twitter.com" className="bg-light nav-fill btn btn-sm btn-sm-square rounded-circle" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter-x text-primary"></i>
            </a>
            <a href="https://www.instagram.com" className="bg-light nav-fill btn btn-sm btn-sm-square rounded-circle" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram text-primary"></i>
            </a>
            <a href="https://www.linkedin.com" className="bg-light nav-fill btn btn-sm btn-sm-square rounded-circle me-0" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin text-primary"></i>
            </a>
          </div>
          {/* Center: Note */}
          <div id="note" className="text-white d-none d-xl-flex">
            <small>Note : We help you to Grow your Business</small>
          </div>

          {/* Right: Social Media Links */}
          <div className="top-info">
          <small className="me-3 text-secondary">
            <a href="#" className="text-white-hover">
            <i className="bi bi-phone me-2"></i>
            </a>
                Call Us: +91-0123 456 7890
            </small>

            <small className="me-3 text-secondary text-white-hover">
              <a href="mailto:Email@Example.com">
                <i className="bi bi-envelope-fill me-2 text-secondary text-white-hover"></i>
              </a>
              Email@Example.com
            </small>
            <small className="me-3 text-white" aria-hidden="true">
                <a href="/register" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                <i className="bi bi-person me-2 text-white"></i>
                Register
              </a>
            </small>
            <small className=" me-3 text-white"aria-hidden="true">
            <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/sign-in"> 
            <i className="bi bi-lock-fill me-2 text-white"></i>
            Sign</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
