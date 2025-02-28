import React from 'react';

function Partner() {
    const cards = [
        { title: "Microsoft", img: "/img/partners/img1.png" },
        { title: "Huawei", img: "/img/partners/img2.png" },
        { title: "HP", img: "/img/partners/img3.png" },
        { title: "Lenovo", img: "/img/partners/img4.png" },
        { title: "Dell", img: "/img/partners/img5.png" },
        { title: "Sonic Wall", img: "/img/partners/img6.png" },
        { title: "IBM", img: "/img/partners/img7.png" },
        { title: "Stanley", img: "/img/partners/img8.png" },
        { title: "Sophos", img: "/img/partners/img9.png" },
    ];

    return (
        <div className="bg-white py-5">
            <div className="text-center">
                <h1>Our Business Partners</h1>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto ">
                            <p className="fs-5">
                                Trusted Partnerships with Leading Global Technology Providers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4 px-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-4 mx-5">
                    {cards.map((card, index) => (
                        <div className="col" key={index}>
                            <img src={card.img} className="card-img-top img-fluid mt-2" alt={card.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Partner;
