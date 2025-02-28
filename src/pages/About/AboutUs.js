import React from "react";
import Title from "../Title";
import Newletter from "../../Component/NewLetter";
import Partner from "../Partner";

function AboutUs() {
  return (
    <>
      <Title title="About Us" page="About Us" link="/about-us" />
      <div className="container-fluid bg-info py-4">
        <div className="row align-items-center mb-4">
          <div className="col-md-5 ">
            <img src="./img/about/img1.jpg" className="img-fluid rounded w-75 ms-5 border-5 border-white " alt="Our Story" />
          </div>
          <div className="col-md-7 text-md-right">
            <h2 className="px-5">Our Story</h2>
            <h5 className="px-5">Building IT Solutions for Over Two Decades</h5>
            <p className="px-5">
              Founded in 2004 in a modest 250 sqft room within a struggling mall, Rounak Computers began with a single employee and a vision: to provide exceptional hardware solutions with unparalleled customer service. Despite humble beginnings, our unwavering dedication to customer satisfaction and our commitment to staying at the forefront of technological advancements have driven our growth.
              Today, Rounak Computers stands tall as a thriving family of 18 employees, operating from a 1400 sqft office on the 9th floor of a prestigious tower. Our team works tirelessly and collaboratively to meet and exceed the needs of our clients. This relentless focus on superior customer service has earned us the esteemed status of gold partners with industry giants such as Microsoft, Huawei, and Amazon.
              In recent years, we have pivoted to specialize in helping businesses migrate to the cutting-edge cloud as well as providing cybersecurity solutions. Our story is a testament to the power of innovation, adaptability, and a customer-centric approach. We continue to evolve and embrace new challenges, always striving to deliver the best for our clients.
            </p>
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-7 text-md-right p-5 h-100">
            <h2 className="px-5">What We Do</h2>
            <h5 className="px-5">Comprehensive IT Services Tailored for Your Business Needs</h5>
            <p className="px-5 ">
              At Rounak Computers, we offer a comprehensive range of IT services tailored to meet the diverse needs of modern businesses. Our offerings include cloud migration, hardware sales, structured cabling, and managed IT support, ensuring seamless and efficient operations for our clients.
              We take pride in delivering solutions that prioritize security and scalability, allowing businesses to focus on growth. From optimizing infrastructure to providing ongoing support, we are dedicated to helping organizations achieve long-term success in an ever-evolving digital environment.
            </p>
          </div>
          <div className="col-md-5 ">
            <img src="./img/about/img1.webp" className="img-fluid rounded w-75 ms-5 border-5 border-white " alt="Our Story" />
          </div>
        </div>
        <div className="row align-items-center mb-4">
        <div className="col-md-5 ">
          <img src="./img/about/img2.webp" className="img-fluid rounded w-75 ms-5 border-5 border-white " alt="Our Story" />
        </div>
        <div className="col-md-7 text-md-right">
          <h2 className="px-5"> Why Rounak Computers</h2>
          <h5 className="px-5">Your Trusted Partner for Scalable and Reliable IT Solutions</h5>
          <p className="px-5">
          Customer satisfaction is at the heart of everything we do at Rounak Computers. Our experienced team delivers reliable, scalable IT solutions, ensuring that each client receives the highest quality service. We understand that every business has unique needs, and we strive to meet them with precision and care.
          Our commitment to innovation, combined with our partnerships with leading technology providers like Microsoft, guarantees that our clients always have access to the latest IT advancements. With Rounak Computers, businesses can trust in a partner dedicated to their success and growth.
          </p>
        </div>
      </div>
    </div>
    < Partner/>
    </>
  );
}

export default AboutUs;
