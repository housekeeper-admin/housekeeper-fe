import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import fetch from "../src/apis/axios"; 
import storage from "../src/apis/storage";
React.$http = fetch;
React.$storage = storage;
ReactDOM.render(
	<App></App>,
	document.getElementById("root")
);

