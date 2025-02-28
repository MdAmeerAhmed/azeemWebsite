import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ServiceCard() {
  const cards = [
    { title: "Structured Cabling", img: "./img/card/img1.png" },
    { title: "IT AMC Services", img: "./img/card/img2.png" },
    { title: "Managed IT Services", img: "./img/card/img3.png" },
    { title: "SPLA", img: "./img/card/img4.png" },
    { title: "Structured Cabling", img: "./img/card/img5.png" },
    { title: "Expert IT Support", img: "./img/card/img6.png" },
    { title: "IT Managed Services", img: "./img/card/img7.png" },
    { title: "Advanced Website & Apps", img: "./img/card/img8.png" }
  ];

  return (
    <div className="bg-light py-5">
      <div className="text-center">
        <h2>Comprehensive IT Services for Seamless Operations</h2>
        <div className="container text-center">
  <div className="row">
    <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
      <p className="fs-5">
        From structured cabling to managed IT services, we provide expert support to ensure your business runs smoothly.
      </p>
    </div>
  </div>
</div>
      </div>
      <div className="container-fluid mt-4 px-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mx-5 ">
          {cards.map((card, index) => (
            <div className="col" key={index}>
              <div className="card shadow text-center" style={{ backgroundColor: "#270ee0" }}>
                <img src={card.img} className="card-img-top img-fluid mt-2" alt={card.title} />
                <div className="card-body">
                  <h6 className="card-title text-white" style={{ fontSize: "14px", margin: "0", padding: "2px" }}>
                    {card.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
