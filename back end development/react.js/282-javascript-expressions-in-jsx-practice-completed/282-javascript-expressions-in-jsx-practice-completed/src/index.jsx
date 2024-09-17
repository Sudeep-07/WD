import React from "react";
import ReactDOM from "react-dom";

const fname = "Sudeep";
const lname = "Patil";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {` ${fname} ${lname}`}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
