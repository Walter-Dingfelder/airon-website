import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

/**
 * Intended path:
 *   src/main.tsx
 *
 * Notes:
 * - Root app entry for a simple React/Vite-style setup.
 * - Imports the shared global style layer once.
 */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
