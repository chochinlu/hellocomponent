import React from "react";
import ReactDOM from "react-dom";

const { Hello } = require("./components/Hello");

// const Days = require("./Days.bs").jsComponent;

const element = <Hello />;
// const element = <Days />;

ReactDOM.render(element, document.getElementById("app"));