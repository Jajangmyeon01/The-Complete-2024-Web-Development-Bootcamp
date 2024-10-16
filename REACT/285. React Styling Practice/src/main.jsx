import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const day = new Date(); // You can change the day and date here by (Y,M,D,MilitaryTime)
const time = day.getHours();

let approach;

const customColor = {
  color: " ",
};

if (time < 12) {
  approach = "Good Morning!";
  customColor.color = "Red";
} else if (time < 18) {
  approach = "Good Afternoon!";
  customColor.color = "Green";
} else {
  approach = "Good Evening!";
  customColor.color = "Blue";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="heading" style={customColor}>
      {approach}
    </h1>
  </StrictMode>
);
