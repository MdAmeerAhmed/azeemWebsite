import React from "react";

const Newsletter = () => { 
  return (
    <section
      id="sp-section-36"
      className="container-fluid py-4 pb-30"
      style={{
        backgroundImage: "linear-gradient(to right, rgb(67, 4, 177), rgb(126, 132, 243))"
      }}
    >
      <div className="row justify-content-center mb-4">
        <div className="col-lg-11 col-md-12">
          <h3 className="text-center mb-3 text-white">
            Newsletter Subscription
          </h3>

          <form method="post" id="userform" className="form-responsive">
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
              {/* Name Input */}
              <input
                type="text"
                id="name"
                name="form[name]"
                className="form-control flex-fill"
                required
                placeholder="Your Name"
              />
              {/* Email Input */}
              <input
                type="email"
                id="email"
                name="form[email]"
                className="form-control flex-fill"
                required
                placeholder="Your Email Address"
              />
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 w-md-auto fw-bold">
                Subscribe to Newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
