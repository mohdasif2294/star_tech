import React from "react";
// import "./Popup.css";
import "../css/flat-ui.min.css";
import { Tabs,Tab } from "react-bootstrap";

const Popup = () => {
  return (
    <div className="row container-fluid">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          tesfs
        </Tab>
        <Tab eventKey="profile" title="Profile" >
          trst
        </Tab>
        <Tab eventKey="contact" title="Contact">
         test2
        </Tab>
      </Tabs>
    </div>
  );
};

export default Popup;
