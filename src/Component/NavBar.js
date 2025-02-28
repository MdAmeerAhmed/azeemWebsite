import React from "react";
import {NavLink, Link} from "react-router-dom";
import "./Navbar.css";
import "animate.css";



const Navbar = () => {
  return (
    <div className="container-fluid sticky-top bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          <Link to="/" className="navbar-brand">
            <h1 className="text-white fw-bold d-block">
              Company<span className="text-secondary">Tech</span>
            </h1>
          </Link>

          <button
            type="button"
            className="navbar-toggler me-0 text-bg-light"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              <NavLink to="/" className="nav-item nav-link active text-secondary">
                Home
              </NavLink>

              {/* About Us Dropdown */}
              <div className="nav-item dropdown">
                <NavLink to="/about-us" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  About Us
                </NavLink>
                <ul className="dropdown-menu fixed-dropdown">
                  <div>
                    <h2 className="fw-normal">Get to know our team and mission</h2>
                    <hr />
                    <div className="d-flex flex-column flex-md-row">
                      <div className="me-md-4 mb-3 mb-md-0" style={{ width: "30%" }} >
                        <img src="/img/img1.jpg" className="img-fluid w-100 p-2 rounded" alt="Team" />
                      </div>
                      <div className="mx-md-5">
                        <li><Link className="dropdown-item" to="/about-us">About Us</Link></li>
                        <li><Link className="dropdown-item" to="/about-us/our-team">Our Team</Link></li>
                        <li><Link className="dropdown-item" to="/about-us/our-partners">Our Partners</Link></li>
                        <li><Link className="dropdown-item" to="/about-us/clients-and-testimonials">Clients and Testimonials</Link></li>
                        <li><Link className="dropdown-item" to="/about-us/faq">FAQ</Link></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>

              {/* IT Services Dropdown */}
              <div className="nav-item dropdown">
                <NavLink to="/it-service" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  IT Service
                </NavLink>
                <ul className="dropdown-menu fixed-dropdown">
                  <div>
                    <h2 className="fw-normal">Expert IT solutions for your business</h2>
                    <hr />
                    <div className="d-flex flex-column flex-md-row">
                      <div className="me-md-4 mb-3 mb-md-0" style={{ width: "30%" }}>
                        <img src="/img/img2.jpg" className="img-fluid w-100 p-2 rounded" alt="IT Service" />
                      </div>
                      <div className="mx-md-5">
                        <li><Link className="dropdown-item" to="/it-service">IT Service</Link></li>
                        <li><Link className="dropdown-item" to="/it-service/our-team">Our Team</Link></li>
                        <li><Link className="dropdown-item" to="/it-service/our-partners">Our Partners</Link></li>
                        <li><Link className="dropdown-item" to="/it-service/clients-and-testimonials">Clients and Testimonials</Link></li>
                        <li><Link className="dropdown-item" to="/it-service/faq">FAQ</Link></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>

              {/* Digital Marketing Dropdown */}
              <div className="nav-item dropdown">
                <NavLink to="/digital-marketing" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Digital Marketing
                </NavLink>
                <ul className="dropdown-menu fixed-dropdown">
                  <div>
                    <h2 className="fw-normal">Expert Digital Marketing solutions for your business</h2>
                    <hr />
                    <div className="d-flex flex-column flex-md-row">
                      <div className="me-md-4 mb-3 mb-md-0" style={{ width: "30%" }}>
                        <img src="/img/digital/img3.webp" className="img-fluid w-100 p-2 rounded" alt="Digital Marketing" />
                      </div>
                      <div className="mx-md-5">
                        <li><Link className="dropdown-item" to="/digital-marketing">Search Engine Optimization</Link></li>
                        <li><Link className="dropdown-item" to="/digital-marketing/social-media-marketing">Social Media Marketing</Link></li>
                        <li><Link className="dropdown-item" to="/digital-marketing/content-marketing">Content Marketing</Link></li>
                        <li><Link className="dropdown-item" to="/digital-marketing/influencer-marketing">Influencer Marketing</Link></li>
                        <li><Link className="dropdown-item" to="/digital-marketing/email-marketing">Email Marketing</Link></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>

              {/* Security Dropdown */}
              <div className="nav-item dropdown">
                <NavLink to="/security" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Security
                </NavLink>
                <ul className="dropdown-menu fixed-dropdown">
                  <div>
                    <h2 className="fw-normal">Get to know our security measures</h2>
                    <hr />
                    <div className="d-flex flex-column flex-md-row">
                      <div className="me-md-4 mb-3 mb-md-0" style={{ width: "30%" }}>
                        <img src="/img/img3.jpg" className="img-fluid w-100 p-2 rounded" alt="Security" />
                      </div>
                      <div className="mx-md-5">
                        <li><Link className="dropdown-item" to="/security">Security</Link></li>
                        <li><Link className="dropdown-item" to="/security/our-team">Our Team</Link></li>
                        <li><Link className="dropdown-item" to="/security/our-partners">Our Partners</Link></li>
                        <li><Link className="dropdown-item" to="/security/clients-and-testimonials">Clients and Testimonials</Link></li>
                        <li><Link className="dropdown-item" to="/security/faq">FAQ</Link></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>

              {/* Contact Link */}
              <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
            </div>
          </div>

          {/* Phone & Search Icon */}
          <div className="d-none d-xl-flex flex-shrink-0">
            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
              <Link to="#" className="position-relative animate__animated animate__tada animate__infinite">
                <i className="bi bi-telephone-fill text-white fa-2x"></i>
                <div className="position-absolute" style={{ top: "-2px", left: "20px" }}>
                  <span><i className="bi bi-chat-dots-fill text-white"></i></span>
                </div>
              </Link>
            </div>
          </div>

          <div className="ms-2 d-flex flex-column pe-4 border-end">
            <span className="text-white-50">Have any questions?</span>
            <span className="text-secondary hover-color">Call: + 0123 456 7890</span>
          </div>

          <div className="d-flex align-items-center justify-content-center ms-4">
            <Link to="#"><i className="bi bi-search text-white fa-2x"></i></Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
