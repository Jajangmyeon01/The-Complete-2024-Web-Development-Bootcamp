import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="my-style">
      <h1>My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="Beyonce-img"
        phone="123-456-7890"
        email="beyonce@example.com"
      />
    </div>

    <div>
      <h1>My Contacts</h1>
      <Card
        name="Anna Kendrick"
        img="https://th.bing.com/th/id/OIP.HPxlgH9kiZOvj5tHWmjBvQHaHa?rs=1&pid=ImgDetMain"
        alt="annakendrick-img"
        phone="987-654-3210"
        email="annakendrick@example.com"
      />
    </div>
  </StrictMode>
);
