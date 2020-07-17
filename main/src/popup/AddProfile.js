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
        { name: "Hrx", id: 1 },
        { name: "Peter England", id: 1 },
        { name: "UCB", id: 1 },
        { name: "Tommy Hilfiger", id: 1 },
        { name: "Van heusen", id: 1 }
      ],
      selectedCategoryValue: [],
      selectedBrandValue: [],
      value: { min: 2, max: 10 },
      gender:"",
      color:""
    };
  },
  onSelect: function(value) {
    var list = this.state.selectedCategoryValue
    var index = list.indexOf(value);
    list.splice(index, 1);
    list.push(value)
    this.setState({
        selectedCategoryValue: list
    })
    console.log(this.state.selectedCategoryValue)
  },
  onRemove: function(value) {
    var list = this.state.selectedCategoryValue
    var index = list.indexOf(value);
    list.splice(index, 1);
    this.setState({
        selectedCategoryValue: list
    })
    console.log(this.state.selectedCategoryValue)
  },
  onGenderClick: function(value) {
    this.setState({
        gender:value
    })
  },
  onBrandSelect: function(value) {
    var list = this.state.selectedBrandValue
    var index = list.indexOf(value);
    list.splice(index, 1);
    list.push(value)
    this.setState({
        selectedBrandValue: list
    })
    console.log(this.state.selectedBrandValue)
  },
  onBrandRemove: function(value) {
    var list = this.state.selectedBrandValue
    var index = list.indexOf(value);
    list.splice(index, 1);
    this.setState({
        selectedBrandValue: list
    })
    console.log(this.state.selectedBrandValue)
  },
  onApply: function () {
    var finalCategory = []
    var finalBrands = []
    var finalcolors = []
    var category = this.state.selectedCategoryValue
    var brands = this.state.selectedBrandValue
    var gender = this.state.gender
    var sizes = ['M']
    var color = this.state.color
    finalcolors.push(color)
    for (var index = 0; index < category[0].length; index++) {  
         finalCategory.push(category[0][index].name)
    } 
    for (var index = 0; index < brands[0].length; index++) { 
            finalBrands.push(brands[0][index].name)
   } 
   console.log('yoo', finalCategory, finalBrands)
    chrome.storage.sync.get('profile',function(items) {
        if (typeof items.profile === 'undefined'){
            items.profile = {};
        }
        delete items.profile.selectedProfile;
        items.profile[finalCategory[0].toLowerCase()] = {"brands":finalBrands, "sizes":sizes, "gender":gender, "colors":finalcolors}
        chrome.storage.sync.set(items, function() {
            console.log('Data successfully saved to the storage!');
        });
    });
    chrome.storage.sync.get('profile', function(data){
        console.log("asd",data.profile);
        alert(JSON.stringify(data['profile']));
    });
    //alert("Your filter are saved successfully, head to View Profile page for details")
  },
  onSizeChange: function(value) {
    console.log(value)
  },
  setColor: function(event) {
   this.setState({
       color: event.target.value
   })
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
            selectedValues={this.state.selectedCategoryValue} // Preselected value to persist in dropdown
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
            selectedValues={this.state.selectedBrandValue} // Preselected value to persist in dropdown
            onSelect={this.onBrandSelect} // Function will trigger on select event
            onRemove={this.onBrandRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div>
        <hr></hr>
        <div className="container-fluid">
          <span className="col-xs-12" style={{ fontFamily: "verdana" }}>
            Size
          </span>
          <ButtonGroup className="col-xs-offset-2 col-xs-8" onChange={this.onSizeChange}>
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
            <button className="button" value="yellow" onClick={this.setColor}></button>
            <button className="button button2" value="red" onClick={this.setColor}></button>
            <button className="button button3" value="green" onClick={this.setColor}></button>
            <button className="button button4" value="black" onClick={this.setColor}></button>
            <button className="button button5" value="white" onClick={this.setColor}></button>
            <button className="button button6" value="orange" onClick={this.setColor}></button>
          </div>
        </div>
        <hr></hr>
        <Button variant="secondary" size="lg" block color="blue" onClick={this.onApply}>
          Apply Filters
        </Button>
      </div>
    );
  }
});
export default MainComponent;
