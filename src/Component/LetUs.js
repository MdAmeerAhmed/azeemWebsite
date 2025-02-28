import React from "react";
import Sentence from "./Sentence";
import Approach from "./Approach";
import CloudService from "./CloudService";

const LetUs = () => {
  return (
    <>
      {/* Section Container */}
      <div 
        className="container-fluid text-white py-4"
        style={{ background: "linear-gradient(to right, #007bff, #6610f2)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left - Heading */}
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="text-light">Let Us Help You Succeed</h2>
            </div>

            {/* Right - Contact Button */}
            <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0">
              <a 
                href="/contact-in" 
                className="btn btn-primary btn-lg rounded px-4"
              >
                Contact Us Now
              </a>
            </div>
          </div>

          {/* Description Text */}
          <div className="row mt-3">
            <div className="col text-center text-lg-start">
              <p className="text-light">
                Transform your business into a future-ready digital enterprise with our comprehensive cloud solutions at Rounak Computers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <CloudService />
      <Sentence 
        Heading="h6"
        bgGradient="linear-gradient(to right, rgb(86, 81, 248), rgb(30, 12, 124))"
        text="Rounak Computers provides customized IT solutions, including hardware sales, software licensing, web development, and consulting, helping businesses achieve growth effectively."
      />
      <Approach />
      <Sentence 
        text="Security is a core focus across all our services, ensuring comprehensive protection for your business in every solution we implement and deploy."
      />
    </>
  );
};

export default LetUs;
