import React from "react";
// import "./Popup.css";
import "../css/flat-ui.min.css";

const Popup = () => {
  return (
    <div className="row container-fluid">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#"
            tabIndex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Popup;
