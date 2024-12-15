import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Optional: Your global styles
import App from "./App"; // Import your App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // This will attach the React app to the "root" div in index.html
);
