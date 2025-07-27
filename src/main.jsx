/**
 *
 *node Module
 *
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 *
 * Components
 *
 */
import App from "./App.jsx";

/**
 *
 * Link CSS
 *
 */
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
