import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

// const fullName = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// const user = {
//   ...fullName,
//   id: 1,
//   username: "johndoe123@gmail.com",
// };

// console.log(user);
