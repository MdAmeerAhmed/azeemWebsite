import React, { useEffect } from "react";
import "./Carousel.css"; // Import CSS for custom styling
import "animate.css"; // Import Animate.css

const Carousel = () => {
  useEffect(() => {
    // Add animation class when the page loads
    const animateElements = document.querySelectorAll(".carousel-caption h1, .carousel-caption h5, .carousel-caption a");
    
    animateElements.forEach(element => {
      element.classList.add("animate__animated", "animate__fadeIn");
    });
  }, []);

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{ height: "550px", position: "relative" }}>
      {/* Carousel Image */}
      <img src="./img/img1.jpg" className="d-block w-100" alt="Carousel" style={{ objectFit: "cover", height: "100%",maxWidth: "100%" }} />

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
        <li data-bs-target="#carouselExample" data-bs-slide-to="3"></li>
      </ul>

      {/* Carousel Inner */}
      <div className="carousel-inner align-items-center justify-content-center ">
        {/* First Slide */}
        <div className="carousel-item active">
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center " >
            <h1 className="text-light">Innovative IT Solutions to Empower Your Business</h1>
            <h5 className="text-light ">Explore our range of products, including Microsoft Copilot, CCTV Solutions, and more, to enhance your business operations.</h5>
            <a href="/products" className="btn btn-outline-light   mt-3 mb-5">View Products</a>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-light">Comprehensive IT Services for Seamless Operations</h1>
            <h5 className="text-light">From structured cabling to managed IT services, we provide expert support to ensure your business runs smoothly.</h5>
            <a href="/products" className="btn btn-outline-light text-light mt-3 mb-5">View Products</a>
          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item">
          <div className="carousel-caption d-flex flex-column  justify-content-center align-items-center">
            <h1 className="text-light">Innovative IT Solutions to Empower Your Business</h1>
            <h5 className="text-light">Explore our range of products, including Microsoft Copilot, CCTV Solutions, and more, to enhance your business operations.</h5>
            <a href="/products" className="btn btn-outline-light text-light mt-3 mb-5">View Products</a>
          </div>
        </div>

        {/* Fourth Slide - FIXED */}
        <div className="carousel-item">
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-light">Next-Gen Cloud & Security Solutions</h1>
            <h5 className="text-light">Stay ahead with our latest AI-driven cloud security and digital transformation services.</h5>
            <a href="/services" className="btn btn-outline-light text-light mt-3 mb-5 w-md-100 w-md-auto"> Explore Services </a>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
