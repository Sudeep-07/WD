// import React from "react";
// import ReactDOM from "react-dom";

// const name = "sudeep";

// const number = "7";

// ReactDOM.render(
// <div>
//     <h1>Hello {name} !</h1>
//      <p>my lucky number is {Math.floor(Math.random() * 10 )}</p>
//      </div>,
//       document.getElementById("root")
//     );

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "sudeep";
// const lname = "patil";

// const number = "7";

// ReactDOM.render(
// <div>
//     <h1>Hello {fname + " " + lname} !</h1>
//      <p>my lucky number is {Math.floor(Math.random() * 10 )}</p>
//      </div>,
//       document.getElementById("root")
//     );
// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "sudeep";
// const lname = "patil";

// const number = "7";

// ReactDOM.render(
// <div>
//     <h1>Hello {fname} {lname} !</h1>
//      <p>my lucky number is {Math.floor(Math.random() * 10 )}</p>
//      </div>,
//       document.getElementById("root")
//     );

// ES6 VERSION 

import React from "react";
import ReactDOM from "react-dom";

const fname = "sudeep";
const lname = "patil";

const number = "7";

ReactDOM.render(
<div>
    <h1>Hello {` ${fname} ${lname}`} !</h1>
     <p>my lucky number is {Math.floor(Math.random() * 10 )}</p>
     </div>,
      document.getElementById("root")
    );



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
