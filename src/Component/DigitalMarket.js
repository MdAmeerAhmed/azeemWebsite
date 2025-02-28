import React from 'react';

function DigitalMarket() {
  const cards = [
    { title: "Search Engine Optimization", img: "./img/digital/img1.png" },
    { title: "Social Media Marketing", img: "./img/card/img2.png" },
    { title: "Paid Marketing Campaigns", img: "./img/card/img3.png" },
    { title: "Content Marketing", img: "./img/card/img4.png" },
    { title: "Influencer Marketing", img: "./img/card/img5.png" },
    { title: "Email Marketing", img: "./img/card/img6.png" },
    { title: "App Store Optimization", img: "./img/card/img7.png" },
    { title: "Online Management", img: "./img/card/img8.png" },
  ];

  return (
    <>
      <div className="container-fluid bg-light py-5">
        <h2 className="text-center">Your business deserves a focused digital marketing strategy</h2>
        <div className="container text-center w-100 d-flex flex-column flex-md-row my-4">
        <div className="col-md-7 d-flex align-items-center">
          <p className="px-5">
            Spending on digital marketing without a clear plan is just wasting money. Without a solid strategy, you don’t know which channels are working and which are draining your budget.
            At scandiweb, we turn enterprise digital marketing into real results. Search Engine Optimization (SEO), Social Media Management (SMM), Pay-per-click (PPC), content marketing, Conversion Rate Optimization (CRO), and email campaigns are only effective when guided by a data-driven strategy. Our aim is to make sure every dollar you spend attracts more customers and delivers higher returns.
            You’ve built something great; now let’s make sure your digital marketing works just as hard as you do.
          </p>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img src="./img/digital/img5.webp" className="img-fluid" alt="SEO" />
        </div>
      </div>
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {cards.map((card, index) => (
              <div className="col" key={index}>
                <div className="card shadow h-100" style={{ backgroundColor: "#270ee0" }}>
                  <img
                    src={card.img}
                    className="card-img-top mt-2"
                    alt={card.title}
                    style={{ cursor: "pointer", borderRadius: "0" }}
                  />
                  <div className="card-body d-flex align-items-center">
                    <h6 className="card-title text-center text-white w-100" style={{ cursor: "pointer", margin: "0", padding: "2px", fontSize: "14px" }}>
                      {card.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DigitalMarket;
