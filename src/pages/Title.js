import React from 'react';
import { NavLink } from 'react-router-dom';   

function Title({ title, page, link }) {
  return (
    <div
      style={{
        backgroundImage: `url("/img/bg1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 200px",
        backgroundPosition: "center",
        height: "25vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-4">{title}</h2>

            {/* Breadcrumb Navigation */}
            <ol className="breadcrumb d-flex justify-content-center p-0 m-0">
              <li className="breadcrumb-item">
                <NavLink to="/" className="text-decoration-none text-dark">
                  <span>
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                </NavLink>
                <meta itemProp="position" content="1" />
              </li>
              <li className="breadcrumb-item">
                <NavLink to="/" className="text-decoration-none text-dark">
                  <span>Home</span>
                </NavLink>
                <meta itemProp="position" content="2" />
              </li>
              <li className="breadcrumb-item active">
                <NavLink to={link} className="text-decoration-none text-dark">
                  <span>{page}</span>
                </NavLink>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
