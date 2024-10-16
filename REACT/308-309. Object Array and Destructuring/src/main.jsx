import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import cars from "./components/cars.jsx";
// import animals from "./components/data.jsx";
// import animals, { useAnimals } from "./components/data.jsx";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
    ,
  </StrictMode>
);

// console.log(useAnimals, animals);

// const [cat, dog] = animals;
// console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// const { name: catName, sound: catSound } = cat;
// console.log(catSound);

// const { name = "doggy", sound = "arf" } = dog;
// console.log(name);

// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;
