import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Avenger</h1>
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="Avg-img"
      alt="Iron man"
      src="https://images.immediate.co.uk/production/volatile/sites/3/2018/05/IRON-2008-d7a2706.jpg?quality=90&resize=800,534"
    />
    <img
      className="Avg-img"
      alt="thor"
      src="https://i.pinimg.com/736x/c4/25/df/c425df61b7da7ada654dc1052ce20b3a.jpg"
    />
    <img
      className="Avg-img"
      alt="black panther"
      src="https://ew.com/thmb/Zf8umhQSNU1kOLQ-zUETCKFmGz4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-panther-a4ad45f2c272490cbf8d569e0bd0bf85.jpg"
    />
  </div>,
  document.getElementById("root")
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
