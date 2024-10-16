import React from "react";

function Heading() {
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

  return (
    <h1 className="heading" style={customColor}>
      {approach}
    </h1>
  );
}

export default Heading;
