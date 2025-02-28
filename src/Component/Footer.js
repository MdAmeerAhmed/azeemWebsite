import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

const Footer = () => {
  return (
    <footer className="container-fluid bg-primary text-light py-5">
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Logo and Description */}
          <div className="col-lg-3 col-md-6">
            <h1 className="text-white fw-bold">
              Company<span className="text-secondary">Tech</span>
            </h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              facere delectus qui placeat inventore consectetur repellendus
              optio debitis.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary">Quick Links</h4>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-light text-decoration-none">About us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Our Partners</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Latest Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3: Product & Services */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary">Product & Services</h4>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">IT Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cloud Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Security</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary">Contact Us</h4>
            <ul className="list-unstyled mt-3">
              <li><i className="fas fa-envelope text-secondary me-2" /> info@example.com</li>
              <li><i className="fas fa-phone-alt text-secondary me-2" /> +123 456 7890</li>
              <li><i className="fas fa-map-marker-alt text-secondary me-2" /> 123 Street, New York, USA</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="d-flex justify-content-center mt-4 gap-3 flex-wrap">
          <a href="#" className="btn btn-light btn-circle hightech-link"><i className="fab fa-facebook-f text-primary"></i></a>
          <a href="#" className="btn btn-light btn-circle hightech-link"><i className="fab fa-twitter text-primary"></i></a>
          <a href="#" className="btn btn-light btn-circle hightech-link"><i className="fab fa-instagram text-primary"></i></a>
          <a href="#" className="btn btn-light btn-circle hightech-link"><i className="fab fa-linkedin-in text-primary"></i></a>
        </div>

        <hr className="text-light mt-5" />

        {/* Footer Bottom */}
        <div className="row text-center text-md-start">
          <div className="col-md-6">
            <span>&copy; 2024 Your Site Name, All Rights Reserved.</span>
          </div>
          <div className="col-md-6 text-md-end">
            <span>Designed By <a href="https://htmlcodex.com" className="text-secondary">HTML Codex</a>, Distributed By <a href="https://themewagon.com" className="text-secondary">ThemeWagon</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
