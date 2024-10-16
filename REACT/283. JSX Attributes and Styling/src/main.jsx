import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const img =
  "https://th.bing.com/th/id/R.6d7c0617faa78b7042b643940b10492a?rik=xIYXhf%2bWW%2bHPlw&riu=http%3a%2f%2fultimateguidetoeverything.com%2fwp-content%2fuploads%2f2020%2f12%2fmain-3.jpg&ehk=jyqC4sg1CmAQSlxNMIuLWWS0B6Y0Pu32rq9oXQmVkKE%3d&risl=&pid=ImgRaw&r=0";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <h1 className="heading" contentEditable={true}>
        Hello World
      </h1>
      <div>
        <img
          className="squares"
          alt="Adobo"
          src="https://th.bing.com/th/id/R.ce5df6d3e3196fe0a3f497f8dfa3b54e?rik=T7mcLcsED9v6pQ&riu=http%3a%2f%2fiamafoodblog.com%2fwp-content%2fuploads%2f2019%2f03%2fchicken-adobo-9289.jpg&ehk=bvBI%2bQg2UB9y5PVHP6e%2fi3y%2bVCmi5PI8%2bfuNEKrGVtg%3d&risl=&pid=ImgRaw&r=0"
        ></img>
        <img
          className="squares"
          alt="Noodles"
          src="https://th.bing.com/th/id/OIP.A_Ey6kEeT9H-FaNCtmVzhgHaLO?rs=1&pid=ImgDetMain"
        ></img>
        <img
          className="squares"
          alt="Tiramisu"
          src="https://th.bing.com/th?id=OIF.cD%2bi1cKZ%2bDxQIf53UA%2fOAQ&rs=1&pid=ImgDetMain"
        ></img>

        <img className="squares" src={img + "?grayscale"} />
      </div>
    </div>
  </StrictMode>
);
