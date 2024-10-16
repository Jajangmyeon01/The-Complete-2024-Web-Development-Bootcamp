import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import pi from "./components/math.jsx";
import PI, { doublePi, triplePi } from "./components/math.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()} Banana</li>
      <li>{triplePi()} Cherry</li>
      <li>Grape</li>
      <li>Orange</li>
    </ul>
  </StrictMode>
);
