import React from "react";
import ReactDOM from "react-dom";
import * as browser from "webextension-polyfill";
import "./index.css";
import Popup from "./Popup";

browser.runtime.sendMessage({ data: "hello" });

ReactDOM.render(
  <Popup text="Myn-Tron" />,
  document.getElementById("root")
);
