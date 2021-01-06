import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import { NavLink } from "react-router-dom";
function services() {
  return (
    <>
      <div className="pages">
        <div className="container d-flex sp col-sm-12">
          <div class="card-body">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Web-Development</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="/" class="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
          <div class="card-body">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Web-Development</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="/" class="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
          <div class="card-body">
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Web-Development</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="/" class="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default services;
