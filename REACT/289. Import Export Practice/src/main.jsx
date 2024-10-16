import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { add, multiply, subtract, divide } from "./components/Calculator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
    ,
  </StrictMode>
);
