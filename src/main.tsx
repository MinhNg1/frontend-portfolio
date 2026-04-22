import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.css";
import "./styles/layout.css";
import "./styles/components.css";

const root = document.getElementById("root");

if (!root) throw new Error("Root not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);