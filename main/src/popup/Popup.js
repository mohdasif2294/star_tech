import React from "react";

import "../css/bootstrap.min.css";
import "./index.css";
import AddProfile from "./AddProfile.js";
import ViewProfile from "./ViewProfile.js";
var createReactClass = require("create-react-class");

let Popup = createReactClass({
  getInitialState: function() {
    return {
      actionType: "",
      viewProfileClass: "nav-link",
      addProfileClass: "nav-link active"
    };
  },

  addProfile: function() {
    this.setState({
      actionType: "active-profile",
      addProfileClass: "nav-link active",
      viewProfileClass: "nav-link"
    });
  },
  viewProfile: function() {
    this.setState({
      actionType: "view-profile",
      viewProfileClass: "nav-link active",
      addProfileClass: "nav-link"
    });
  },

  render: function() {
    let self = this;
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
              <a
                className={self.state.addProfileClass}
                href="#"
                onClick={self.addProfile}
              >
                Add Profile
              </a>
            </li>
            <li className="nav-item nav-width">
              <a
                className={self.state.viewProfileClass}
                href="#"
                onClick={self.viewProfile}
              >
                View Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="row container-fluid ">
          {self.state.actionType == "view-profile" ? (
            <ViewProfile />
          ) : (
            <AddProfile />
          )}
        </div>
      </div>
    );
  }
});

export default Popup;
