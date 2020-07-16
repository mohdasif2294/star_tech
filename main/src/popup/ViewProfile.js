import React from "react";
var createReactClass = require("create-react-class");
import { Multiselect } from "multiselect-react-dropdown";
import "./Popup.css";
import "../css/bootstrap.min.css";

let ViewProfile = createReactClass({
  getInitialState: function() {
    return {
      selectedProfile: "",
      profileList: ["shoes", "jeans", "shirts"],
      profileDetails: {},
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
      selectedValue: []
    };
  },
  onSelect: function(e) {
    if (e.target.value == "disabled") {
      return;
    }

    let profile = e.target.value;

    this.fetchProfileData(profile);

    this.setState({
      selectedProfile: profile
    });
  },

  fetchProfileData: function(profile) {
    console.log("Profile", profile);
  },

  onRemoveProfile: function() {
    console.log("no");
  },
  render: function() {
    let self = this;
    return (
      <div className="row container-fluid margin-top">
        <div className="row container-fluid content">
          <div className="col-xs-3 col-xs-offset-1 fontBold">Profile:</div>
          <div className="col-xs-7">
            <select
              className="custom-select form-control select select-primary select-block mbl select-width"
              ref="profile"
              onChange={self.onSelect}
            >
              <option value="disabled" key="a_b" defaultValue>
                Choose Profile
              </option>
              {self.state.profileList.map(function(profile, idx) {
                return (
                  <option value={profile} key={profile}>
                    {profile}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="row container-fluid">
            <div className="ol-md-4 col-lg-4 col-xs-offset-3 col-xs-6 margin-top">
              <button
                style={{ backgroundColor: "#e74c3c" }}
                className="btn submitBtnStyle"
                onClick={self.onSubmit}
              >
               <svg style={{marginRight:"8px"}}width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                REMOVE
              </button>
            </div>
          </div>
        </div>
        {self.state.profileDetails.length > 0 ? (
          <div>
            <div className="container-fluid">
              <span style={{ fontFamily: "verdana" }}>Category</span>
              <Multiselect
                options={this.state.categoryoptions} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
            <div className="container-fluid">
              <span style={{ fontFamily: "verdana" }}>Brands</span>
              <Multiselect
                options={this.state.brandoptions} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
            <button class="btn btn-embossed btn-danger">Embossed Button</button>
          </div>
        ) : null}
      </div>
    );
  }
});
export default ViewProfile;
