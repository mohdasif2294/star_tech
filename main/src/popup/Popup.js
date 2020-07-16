import React from "react";

import "../css/bootstrap.min.css";
import "./index.css";
import AddProfile from './AddProfile.js';

const Popup = () => {
  
  return (
    <div className="row container-fluid">
      <div className="row container-fluid">
        <div className="col-md-2 col-md-offset-3 col-xs-offset-2 col-xs-3 text-align-right">
          <img
            className="logo img-logo"
            src="/img/logo.png"
            alt="Myn-Tron logo"
            title="Myn-Tron"
          />
        </div>
        <div className="col-md-4 col-xs-5">
          <h4 className="head-title">Myn-Tron</h4>
        </div>
      </div>

      <div className="row container-fluid ">
        <ul className="nav nav-tabs navBar">
          <li className="nav-item nav-width">
            <a className="nav-link active" href="#" >
              Add Profile
            </a>
          </li>
          <li className="nav-item nav-width">
            <a className="nav-link" href="#" >
              View Profile
            </a>
          </li>
          <li className="nav-item nav-width">
            <a className="nav-link" href="#" >
              Edit Profile
            </a>
          </li>
        </ul>
      </div>
      
      <div className="row container-fluid "><AddProfile/></div>
    </div>
  );
};

export default Popup;
