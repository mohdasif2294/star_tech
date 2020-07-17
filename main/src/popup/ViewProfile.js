import React from "react";
var createReactClass = require("create-react-class");
import { Multiselect } from "multiselect-react-dropdown";
import "./Popup.css";
import "../css/bootstrap.min.css";
import { Button, ButtonGroup } from "reactstrap";
import { RadioGroup, RadioButton } from "react-radio-buttons";

let ViewProfile = createReactClass({
  getInitialState: function() {
    return {
      selectedProfile: "",
      profileList: [],
      profileDetails: {},
      profilesMap: {},
      isLoaded: false
    };
  },

  fetchProfileList: function() {
    let self = this;
    chrome.storage.sync.get("profile", function(data) {
      let list = [];
      if (typeof data.profile === "undefined") {
        console.log("Undefined profile");
      } else {
        Object.keys(data.profile).forEach((key, idx) => {
          console.log("key", key, data.profile[key]);
          list.push(key);
        });

        self.setState({
          profileList: list,
          profilesMap: data.profile
        });
      }
    });
  },

  componentWillMount: function() {
    this.fetchProfileList();
  },

  onSelect: function(e) {
    if (e.target.value == "disabled") {
      this.setState({
        selectedProfile: "shoes",
        profileList: ["shoes", "tshirt", "trousers"],
        isLoaded: true,
        profileDetails: {
          brandList: [
            { id: 0, name: "Levis" },
            { id: 1, name: "Puma" }
          ],
          sizeList: ["M", "XS", "L"],
          genderList: ["male"],
          colorList: ["RED", "ORANGE", "GREEN"]
        }
      });
      return;
    }

    let profile = e.target.value;
    this.fetchProfileData(profile);
  },

  fetchProfileData: function(profile) {
    let self = this;
    let profilesMap = self.state.profilesMap;
    Object.keys(profilesMap).forEach((key, idx) => {
      console.log("key", key, data.profile[key], profile);
      if (key == profile) {
        let profileDetails = {};

        profileDetails["brandList"] = profilesMap[key]["brands"];
        profileDetails["sizeList"] = profilesMap[key]["sizes"];
        profileDetails["genderList"] = profilesMap[key]["gender"];
        profileDetails["colorList"] = profilesMap[key]["colors"];
        self.setState({
          profileDetails: profileDetails,
          isLoaded: true,
          selectedProfile: profile
        });
      }
    });
  },

  onRemoveProfile: function() {
    let self = this;
    let selectedProfile = self.state.selectedProfile;

    console.log("onRemoveProfile");
    chrome.storage.sync.get("profile", function(items) {
      if (typeof items.profile === "undefined") {
        items.profile = {};
      }
      delete items.profile.selectedProfile;
      console.log("Item profile", items);
      chrome.storage.sync.set(items, function() {
        console.log("Data successfully saved to the storage!");
      });
    });

    self.setState({
      isLoaded: false,
      profileDetails: {},
      selectedProfile: ""
    });
  },

  render: function() {
    let self = this;
    console.log(
      "state: ",
      self.state,
      Object.keys(self.state.profileDetails).length
    );
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
              <option value="disabled1" key="a_b1">
                test
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
        </div>
        {Object.keys(self.state.profileDetails).length > 0 ? (
          <div>
            <div className="row container-fluid margin-top">
              <div className="col-xs-3 fontBold">Gender</div>
              <div className="col-xs-3">
                <RadioGroup horizontal value="">
                  {self.state.profileDetails["genderList"].map(function(
                    gender,
                    idx
                  ) {
                    console.log("GenderList", gender);
                    return <RadioButton value={gender}>{gender}</RadioButton>;
                  })}
                </RadioGroup>
              </div>
            </div>

            <div className="row container-fluid margin-top">
              <div className="col-xs-3 fontBold"> Brands: </div>
              <div className="row container-fluid">
                <div className="col-xs-12">
                  <Multiselect
                    selectedValues={self.state.profileDetails["brandList"]}
                    displayValue="brands"
                    displayValue="key"
                  />
                </div>
              </div>
            </div>

            <div className="row container-fluid margin-top">
              <div className="col-xs-3 fontBold"> Size: </div>
              <div className="row container-fluid">
                <div className="col-xs-12">
                  <ButtonGroup>
                    {self.state.profileDetails["sizeList"].map(function(
                      size,
                      idx
                    ) {
                      return <Button key={idx} className="btnStyle">{size}</Button>;
                    })}
                  </ButtonGroup>
                </div>
              </div>
            </div>

            <div className="row container-fluid margin-top">
              <div className="col-xs-3 fontBold"> Color: </div>
              <div className="row container-fluid">
                <div className="col-xs-12">
                  <ButtonGroup>
                    {self.state.profileDetails["colorList"].map(function(
                      color,
                      idx
                    ) {
                      return (
                        <Button key={idx} className="btnStyle">
                          {color}
                        </Button>
                      );
                    })}
                  </ButtonGroup>
                </div>
              </div>
            </div>

            <div className="row container-fluid margin-top">
              <div
                className="col-md-4 col-lg-4 col-xs-offset-3 col-xs-6 margin-top"
                style={{ textAlign: "center" }}
              >
                <button
                  style={{ backgroundColor: "#e74c3c" }}
                  className="btn submitBtnStyle"
                  onClick={self.onRemoveProfile}
                >
                  <svg
                    style={{ marginRight: "8px" }}
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-trash"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        ) : self.state.isLoaded == true ? (
          <div className="row container-fluid">
            <div
              className="col-xs-10 col-xs-offset-1"
              style={{
                color: "#808e9b",
                fontSize: "15px",
                marginTop: "150px",
                textAlign: "center",
                fontWeight: 500
              }}
            >
              Profile details are not present.
            </div>
          </div>
        ) : null}
      </div>
    );
  }
});
export default ViewProfile;
