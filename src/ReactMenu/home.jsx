import React from "react";
import laptop from "./images/laptop.png";
import { NavLink } from "react-router-dom";

function home() {
  return (
    <div className="pages">
      <section id="header" className="d-flex">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 order-1 header-img my-5">
                  <img
                    src={laptop}
                    className="img-fluid animated"
                    alt="home img"
                    height="700px"
                    width="700px"
                  ></img>
                </div>

                <div className="col-md-6 pt-5 d-flex pt-lg-0 justify-content-center flex-column">
                  <h1>
                    Do Your Buisness With{" "}
                    <strong className="text-primary">Arun kumar</strong>
                  </h1>
                  <h2 className="my-3">
                    we are the team of 2 people making websites.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="" className="btn btn-primary">
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
