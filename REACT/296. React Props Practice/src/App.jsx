import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="beyonce-img"
        phone="123-456-7890"
        email="beyonce@example.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        alt="jackbauer-img"
        phone="987-654-3210"
        email="jackbauer@example.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        alt="chucknorris-img"
        phone="+918 372 574"
        email="chucknorris@example.com"
      />
    </div>
  );
}

export default App;
