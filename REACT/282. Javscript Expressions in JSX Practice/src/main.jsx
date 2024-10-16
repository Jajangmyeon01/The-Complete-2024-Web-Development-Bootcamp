import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const name = "Gen";
const year = new Date().getFullYear();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <p>Created by {name}.</p>
      <p>Copyright {year}</p>
    </div>
  </StrictMode>
);
