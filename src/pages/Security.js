import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Security() {
  const cards = [
    { title: "Advance Threat Protection", img: "./img/security/img1.png" },
    { title: "Sophos Security in Dubai", img: "./img/security/img2.png" },
    { title: "IBM MASS 360", img: "./img/security/img3.png" },
    { title: "Mimecast Dubai", img: "./img/security/img4.png" },
    { title: "Top Security Solutions", img: "./img/security/img5.png" },
    { title: "Barracuda Email Security", img: "./img/security/img6.png" },
    { title: "Guaranteed Information Security", img: "./img/security/img7.png" },
  ];

  return (
    <div className="bg-light py-5">
      <div className="text-center">
        <h2>Protect Your Business with Leading Security Solutions</h2>
        <div className="container text-center">
  <div className="row">
    <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
      <p className="fs-5">
      Stay secure with top-tier solutions like O365 Advanced Threat Protection, Sophos Security, and Barracuda Email Security.
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

export default Security;
