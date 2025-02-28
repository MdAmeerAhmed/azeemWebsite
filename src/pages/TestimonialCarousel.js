import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
    return (
        <div className='bg-white my-4 container'>
            <div className='text-center'>
                <h5 >Real People, Real Results</h5>
                <h2 className='fw-bold py-2'>What Our Clients Say About Rounak Computers</h2>
            </div>
            <div className='row d-flex align-items-center justify-content-center mt-4'>
                <div className='col-lg-5 col-md-6 col-sm-12 text-center'>
                    <img src='/img/client/img1.png' className='rounded img-fluid my-3' alt='Google review' />
                    <div id='carouselExample1' className='carousel slide' data-bs-ride='carousel'>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='d-flex justify-content-center align-items-center p-4' style={{ height: '250px' }}>
                                    <p className='p-4'>
                                        Our Office 365 was formerly hosted by GoDaddy, and Rounak Computers provided invaluable assistance during our migration from GoDaddy to Office 365.
                                        We received excellent support, and we extend our gratitude to Mr. Safuvan for his assistance.
                                    </p>
                                </div>
                            </div>
                            <div className='carousel-item'><div className='d-flex justify-content-center align-items-center p-4' style={{ height: '250px' }}>
                                <p className='p-4'>
                                    Our Dynamics 365 was hosted by Microsoft Dynamics CRM, and Rounak Computers provided invaluable assistance during our migration from Microsoft Dynamics CRM to Dynamics 365.
                                </p>
                                </div></div>
                            <div className='carousel-item'><div className='d-flex justify-content-center align-items-center p-4' style={{ height: '250px' }}>
                            <p className='p-4'>
                                    Our Dynamics 365 was hosted by Microsoft Dynamics CRM, and Rounak Computers provided invaluable assistance during our migration from Microsoft Dynamics CRM to Dynamics 365.
                                </p>
                                </div></div>
                            <div className='carousel-item'><div className='d-flex justify-content-center align-items-center p-4' style={{ height: '250px' }}>
                            <p className='p-4'>
                                    Our Dynamics 365 was hosted by Microsoft Dynamics CRM, and Rounak Computers provided invaluable assistance during our migration from Microsoft Dynamics CRM to Dynamics 365.
                                </p>
                                </div></div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample1' data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' style={{filter: "invert(50%) sepia(1%) saturate(10%) hue-rotate(175deg) brightness(90%) contrast(90%)"}}></span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#carouselExample1' data-bs-slide='next'>
                            <span className='carousel-control-next-icon'style={{filter: "invert(50%) sepia(1%) saturate(10%) hue-rotate(175deg) brightness(90%) contrast(90%)"}}></span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-5 col-md-6 col-sm-12 text-center mt-4 mt-md-0'>
                    <img src='/img/client/img2.png' className='rounded img-fluid my-3' alt='Review' />
                    <div id='carouselExample2' className='carousel slide' data-bs-ride='carousel'>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'><div className='d-flex justify-content-center align-items-center p-4' style={{ height: '250px' }}>
                            <p className='p-4'>
                                    Our Dynamics 365 was hosted by Microsoft Dynamics CRM, and Rounak Computers provided invaluable assistance during our migration from Microsoft Dynamics CRM to Dynamics 365.
                                </p>
                                </div></div>
                            <div className='carousel-item'><div className='d-flex justify-content-center align-items-center p-4' style={{ height: '250px' }}>
                            <p className='p-4'>
                                    Our Dynamics 365 was hosted by Microsoft Dynamics CRM, and Rounak Computers provided invaluable assistance during our migration from Microsoft Dynamics CRM to Dynamics 365.
                                </p>
                                </div></div>
                            <div className='carousel-item'><div className='d-flex justify-content-center align-items-center p-4' style={{ height: '250px' }}>
                            <p className='p-4'>
                                    Our Dynamics 365 was hosted by Microsoft Dynamics CRM, and Rounak Computers provided invaluable assistance during our migration from Microsoft Dynamics CRM to Dynamics 365.
                                </p>
                                </div></div>
                            <div className='carousel-item'><div className='d-flex justify-content-center align-items-center p-4' style={{ height: '250px' }}>
                                                                <p className='p-4'>
                                    Our Dynamics 365 was hosted by Microsoft Dynamics CRM, and Rounak Computers provided invaluable assistance during our migration from Microsoft Dynamics CRM to Dynamics 365.
                                </p>
                                </div></div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample2' data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon'style={{filter: "invert(50%) sepia(1%) saturate(10%) hue-rotate(175deg) brightness(90%) contrast(90%)"}}></span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#carouselExample2' data-bs-slide='next'>
                            <span className='carousel-control-next-icon'style={{filter: "invert(50%) sepia(1%) saturate(10%) hue-rotate(175deg) brightness(90%) contrast(90%)"}}></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent;