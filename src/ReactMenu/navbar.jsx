import React from "react";
import {NavLink} from "react-router-dom";
function navbar() {
    return (
      <div className="container-fluid nav_bg">
          <div className="row">
              <div className="col-10 mx-auto">    
        <nav className="navbar navbar-expand-lg ">
  <NavLink className="navbar-brand" to="/">Ankush's Profile</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="is_active" exact className="nav-link left" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="is_active" className="nav-link left"  to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="is_active" className="nav-link left" to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="is_active" className="nav-link left" to="/contact">Contact Us</NavLink>
      </li>
    </ul>
   
  </div>
</nav>
</div>
          </div>
      </div>
    );
  }
  
  export default navbar;
  