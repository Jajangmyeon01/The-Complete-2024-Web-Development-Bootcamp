import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.map((x) => x * x);

//Map
// const newNumber = numbers.map((x) => x * 2);

//Filter
// const newNumber = numbers.filter((num) => num < 10);

//Reduce
// const newNumber = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

//Index
// const newNumber = numbers.find((num) => num > 10);

//console.log(newNumbers);
