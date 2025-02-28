import React from 'react';
import ServiceCard from './ServiceCard';

function WhoAre() {
  return (
    <>
      {/* Who Are We Section */}
      <div className='container-fluid bg-white py-5'>
        <div className='container '>
          <div className='row align-items-center mb-5'>
            <div className='col-lg-6 px-4'>
              <h1>Who Are We</h1>
              <p>
                For over 20 years, Rounak Computers LLC has been a trusted provider of IT sales and services in Dubai, 
                recognized as a Microsoft Gold Partner in Cloud Productivity. We have built a solid reputation by offering a wide 
                range of services, including structured cabling, CCTV, Managed IT Services, Onsite support, and AMC services for 
                critical IT infrastructure. We also provide rental solutions for PCs, laptops, and projectors for events.
              </p>
              <p>
                Many of our clients have been with us since the beginning, and we pride ourselves on addressing every customer's 
                needs across various sectors. We only procure products from authorized distributors, maintaining strong partnerships 
                with leading brands like Microsoft, HP, Dell, Lenovo, and Sophos. Our certified team is continuously trained to deliver 
                cutting-edge IT solutions.
              </p>
            </div>
            <div className='col-lg-6 text-center'>
              <img src='./img/img4.png' alt='Who We Are' className='img-fluid rounded' style={{ maxHeight: '400px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div 
  className="container-fluid py-5" 
  style={{ backgroundImage: "linear-gradient(to right, rgb(32, 4, 81), rgb(58, 68, 247))" }}
>
  <div className="container text-white">
    <div className="row align-items-center">
      {/* Left Section - Text */}
      <div className="col-lg-6 col-md-12 px-4 text-center text-lg-start">
        <h1>What We Do</h1>
        <p>
          As a certified Microsoft Cloud Partner, Rounak Computers offers expert solutions for migrating, implementing, and 
          managing your business in the cloud. Our deep expertise in Microsoft technologies like Office 365, Azure, and 
          Dynamics 365 ensures seamless integration, enhanced productivity, and secure cloud operations.
        </p>
      </div>

      {/* Right Section - Images */}
          <div className="col-lg-6 col-md-12 d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
            <img src="./img/microsoft.png" className="img-fluid rounded" alt="Microsoft" style={{ maxHeight: '180px' }} />
            <div className="text-center">
              <h6 className="fw-bold text-white">Find Us in SAP</h6>
              <img src="./img/img5.webp" className="img-fluid rounded" alt="SAP" style={{ maxHeight: '150px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Service Cards */}
      <ServiceCard />
    </>
  );
}

export default WhoAre;
