import React from "react";
var createReactClass = require('create-react-class');
import { Multiselect } from 'multiselect-react-dropdown';
import Image from 'react-image-resizer';
import icon from './myntra_icon.jpeg'; 
import "./Popup.css";
import "../css/bootstrap.min.css";
import { func } from "prop-types";

let MainComponent = createReactClass({
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
        <div class="container-fluid">
            <div className="col-xs-offset-4 col-xs-4">
            <Image
            img src={icon} alt="Myntra" className="img"
            height={80}
            width={80}
            style={{ alignSelf: 'center' }}
            />
            </div>
        </div>
        <div class="container-fluid">
        <span style={{fontFamily:"verdana"}}>Category</span>
        <Multiselect
            options={this.state.categoryoptions} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
        />
        </div>
        <div class="container-fluid">
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
export default MainComponent;
