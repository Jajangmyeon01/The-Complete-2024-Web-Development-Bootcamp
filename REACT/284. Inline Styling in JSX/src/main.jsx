import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const customStyles = {
  color: "red",
  fontSize: "24px",
  border: "2px solid black",
};

customStyles.color = "skyblue";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 style={customStyles}>Hello World</h1>
  </StrictMode>
);
