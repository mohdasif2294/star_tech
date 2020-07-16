import React from "react";
var createReactClass = require('create-react-class');
import { Multiselect } from 'multiselect-react-dropdown';
import Image from 'react-image-resizer';
import icon from './myntra_icon.jpeg'; 
import "./Popup.css";
import "../css/bootstrap.min.css";

let ViewProfile = createReactClass({
	getInitialState: function () {
		return {
      categoryoptions: [{name: 'Shirts', id: 1},{name: 'Tshirts', id: 2},{name: 'Jeans', id: 2},{name: 'Shoes', id: 2}],
      brandoptions: [{name: 'Levis', id: 1}, {name: 'Nike', id: 1}, {name: 'Roadster', id: 1}, {name: 'Hrx', id: 1}],
      selectedValue: []
		};
  },
  onSelect: function() {
    console.log('yes')
  },
  onRemove: function() {
    console.log('no')
  },
	render: function () {
		return (
			<div style={
                {
                 border: '3px solid pink'
                }
              }>
        <div className="container-fluid">
        </div>
        <div className="container-fluid">
        <span style={{fontFamily:"verdana"}}>Category</span>
        <Multiselect
            options={this.state.categoryoptions} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
        />
        </div>
        <div className="container-fluid">
        <span style={{fontFamily:"verdana"}}>Brands</span>
				<Multiselect
            options={this.state.brandoptions} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
        />
        </div>
		</div>
		);
	}
});
export default ViewProfile;
