import React from "react";
import Form from "./Form";
import { flushSync } from "react-dom";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form
      isRegistered = {userIsRegistered}
      />
    </div>
  );
}

export default App;
