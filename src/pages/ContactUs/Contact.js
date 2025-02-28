import React from 'react'
import Title from '../Title'
import Partner from '../Partner';
import From from '../From';
import TestimonialCarousel from '../TestimonialCarousel';
function Contact() {
  return (
    <>
     
      <Title title='Contact Us' page='Contact Us' link="/contact" />
      <From />
      <div className='my-5 container'>
        <div className='text-center'>
          <h3>Computers Technology</h3>
          <h6>Empower Your Business with Secure, Scalable Cloud Solutions</h6>
          <p className='px-md-5 px-3' style={{ fontSize: '15px', margin: '20px' }}>
            In today's dynamic environment, businesses need visibility, flexibility, and robust security to thrive in the cloud. Rounak Computers offers your team the tools to efficiently manage and monitor cloud operations, ensuring a secure and compliant cloud infrastructure tailored to your business needs.
          </p>
        </div>
        <div className='row d-flex px-5 ms-3'>
          <div className='col-lg-5 col-md-6 col-sm-12 mb-4'>
            <img src='/logo192.png' className='img-fluid ' alt='Logo' />
            <h4>Office Address</h4>
            <p className='px-3 h-50 w-50'>Plot No. 11, Survey No. 11, HUDA, Knowledge City, Phase-II, Hyderabad, Telangana - 500032, India</p>
          </div>
          <div className='col-lg-5 col-md-6 col-sm-12'>
            <h4>Email Us</h4>
            <a href='mailto:info@rounakcomputers.com'className='text-decoration-none text-dark'>info@rounakcomputers.com</a>
            <h4 className='mt-3'>Phone Number</h4>
            <p>+971 55 1673 070</p>
            <p>+971 55 1673 070</p>
            <h4 className='mt-3'>Website</h4>
            <a href='/' className='text-decoration-none text-dark'> www.rounakcomputers.com </a>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div style={{height:'450px'}}>
      <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <Partner />
      <TestimonialCarousel />
    </>
  )
}

export default Contact;
