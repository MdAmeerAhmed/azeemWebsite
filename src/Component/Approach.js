import React from 'react';
import "animate.css";

function Approach() {
  return (
    <>
      <div className="container-fluid h-auto p-4 align-items-center justify-content-center ">
        <div className="text-center px-5">
          <h1 className="fw-medium">Our Cloud Business Solutions Approach</h1>
          <p className="mx-5">
            At Rounak Computers, we excel in delivering top-notch IT and cloud services in Dubai to businesses. Our success stems from a dedicated team and innovative strategies that simplify the process into three seamless steps:
          </p>
        </div>
        <div className="row m-5 justify-content-center gap-4">
          <div className="col-lg-3 col-md-6 animate__animated animate__bounceInLeft d-flex flex-column align-items-center text-center" style={{ borderRadius: "20px", animationDuration: "1000ms", background: "#b7ecff", padding: "20px" }}>
            {/* Icon Section */}
            <i className="bi bi-check-circle-fill text-primary fs-1 mb-3"></i>
            {/* Text Content */}
            <h3 className="fw-semibold">We Understand</h3>
            <p className="mb-0">
              We work closely with you to understand your specific needs. Whether you're exploring cloud service providers in Dubai or seeking cloud services in Dubai, our tailored approach ensures your business challenges are effectively addressed.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center text-center" style={{ borderRadius: "20px", background: "#b7ecff", padding: "20px", margin: "0px" }}>
            {/* Icon Section */}
            <i className="bi bi-check-circle-fill text-primary fs-1 mb-3"></i>
            {/* Text Content */}
            <h3 className="fw-semibold">We Deliver</h3>
            <p className="mb-0">
              Leveraging advanced technologies, we provide reliable cloud computing services in Dubai with timely delivery, empowering your business to scale seamlessly.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 animate__animated animate__bounceInRight d-flex flex-column align-items-center text-center" style={{ borderRadius: "20px", animationDuration: "1000ms", background: "#b7ecff", padding: "20px", margin: "0px" }}>
            {/* Icon Section */}
            <i className="bi bi-check-circle-fill text-primary fs-1 mb-3"></i>
            {/* Text Content */}
            <h3 className="fw-semibold">We Support</h3>
            <p className="mb-0">
              Our 24/7 support ensures constant access to trusted cloud service providers in UAE, keeping your operations running smoothly at all times.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Approach;
