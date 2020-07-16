import React from "react";
var createReactClass = require("create-react-class");
import { Multiselect } from "multiselect-react-dropdown";
import Image from "react-image-resizer";
import icon from "./myntra_icon.jpeg";
import "./Popup.css";
import "../css/bootstrap.min.css";
import { Button, ButtonGroup } from "reactstrap";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { func } from "prop-types";

let MainComponent = createReactClass({
  getInitialState: function() {
    return {
      categoryoptions: [
        { name: "Shirts", id: 1 },
        { name: "Tshirts", id: 2 },
        { name: "Jeans", id: 2 },
        { name: "Shoes", id: 2 }
      ],
      brandoptions: [
        { name: "Levis", id: 1 },
        { name: "Nike", id: 1 },
        { name: "Roadster", id: 1 },
        { name: "Hrx", id: 1 }
      ],
      selectedValue: [],
      value: { min: 2, max: 10 }
    };
  },
  onSelect: function() {
    console.log("yes");
  },
  onRemove: function() {
    console.log("no");
  },
  onGenderClick: function() {
    console.log("ok");
  },
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <span className="col-xs-12" style={{ fontFamily: "verdana" }}>
            Gender
          </span>
          <RadioGroup onChange={this.onGenderClick} horizontal>
            <RadioButton value="male">Male</RadioButton>
            <RadioButton value="female">Female</RadioButton>
            <RadioButton value="other">Other</RadioButton>
          </RadioGroup>
        </div>
        <hr></hr>
        <div className="container-fluid">
          <span className="col-xs-12" style={{ fontFamily: "verdana" }}>
            Category
          </span>
          <hr></hr>
          <Multiselect
            options={this.state.categoryoptions} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div>
        <hr></hr>
        <div className="container-fluid">
          <span className="col-xs-12" style={{ fontFamily: "verdana" }}>
            Brands
          </span>
          <hr></hr>
          <Multiselect
            options={this.state.brandoptions} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div>
        <hr></hr>
        <div className="container-fluid">
          <span className="col-xs-12" style={{ fontFamily: "verdana" }}>
            Size
          </span>
          <ButtonGroup className="col-xs-offset-2 col-xs-8">
            <Button>XS</Button>
            <Button>S</Button>
            <Button>M</Button>
            <Button>L</Button>
            <Button>XL</Button>
          </ButtonGroup>
        </div>
        <hr></hr>
        <div className="container-fluid">
          <span className="col-xs-12" style={{ fontFamily: "verdana" }}>
            Color
          </span>
          <div className="col-xs-offset-2 col-xs-8">
            <button class="button"></button>
            <button class="button button2"></button>
            <button class="button button3"></button>
            <button class="button button4"></button>
            <button class="button button5"></button>
            <button class="button button6"></button>
          </div>
        </div>
        <hr></hr>
        <Button variant="secondary" size="lg" block color="blue">
          Apply Filters
        </Button>
      </div>
    );
  }
});
export default MainComponent;
