import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
); 


console.log(`Client running in ${process.env.NODE_ENV} mode`);
