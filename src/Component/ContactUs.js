import React from 'react';
import "./ContactUs.css";
import LetUs from './LetUs';

function ContactUs() {
  return (
    <>
      <LetUs />
      <div className="container-fluid py-5 mb-5">
        <div className="container">
          <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: 600 }}>
            <h5 className="text-primary">Get In Touch</h5>
            <h1 className="mb-3">Contact for any query</h1>
            <p className="mb-2">
              The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done.{" "}
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
          </div>
          <div className="contact-detail position-relative p-5" style={{ backgroundImage: `url("/img/img2.jpg")`, borderRadius: "10px" }}>
            <div className="row g-5 mb-5 justify-content-center">
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeIn" data-wow-delay=".3s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-info rounded-circle d-flex justify-content-center align-items-center" style={{ width: 64, height: 64 }}>
                    <i className="bi bi-geo-alt-fill text-white fa-2x" />
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Address</h4>
                    <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" className="h5 text-decoration-none">
                      23 rank Str, NY
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeIn" data-wow-delay=".5s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-info rounded-circle d-flex justify-content-center align-items-center" style={{ width: 64, height: 64 }}>
                    <i className="bi bi-telephone-fill text-white fa-2x" />
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Call Us</h4>
                    <a className="h5 text-decoration-none" href="tel:+0123456789" target="_blank">
                      +012 3456 7890
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeIn" data-wow-delay=".7s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-info rounded-circle d-flex justify-content-center align-items-center" style={{ width: 64, height: 64 }}>
                    <i className="bi bi-envelope-fill text-white fa-2x" />
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Email Us</h4>
                    <a className="h5 text-decoration-none" href="mailto:info@example.com" target="_blank">
                      info@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay=".5s">
                <div className="p-4 rounded contact-form">
                  <div className="mb-4">
                    <input type="text" className="form-control border-0 py-3" placeholder="Your Name" />
                  </div>
                  <div className="mb-4">
                    <input type="email" className="form-control border-0 py-3" placeholder="Your Email" />
                  </div>
                  <div className="mb-4">
                    <input type="text" className="form-control border-0 py-3" placeholder="Project" />
                  </div>
                  <div className="mb-4">
                    <textarea className="w-100 form-control border-0 py-3" rows={6} cols={10} placeholder="Message" defaultValue={""} />
                  </div>
                  <div className="text-start">
                    <button className="btn bg-primary text-white py-3 px-5" type="button">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay=".3s">
                <div className="p-4 h-100 rounded contact-map">
                  <iframe className="rounded w-100 h-100" title="Example Frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
