import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";

// Find the root element in the HTML document
const rootElement = document.getElementById("root");

// Ensure the root element exists before rendering the app
if (rootElement) {
  // Render the app inside React.StrictMode for additional checks and warnings
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Unable to find the root element with id 'root'");
}
