import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// setInterval(() => {
const element = <h1 className="watch"> {new Date().toLocaleTimeString()}</h1>;

ReactDOM.render(element, document.getElementById("root"));
// }, 1000);
