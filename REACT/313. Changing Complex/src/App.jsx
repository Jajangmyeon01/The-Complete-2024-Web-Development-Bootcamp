import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  // const [LName, setLName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const { value, name } = event.target;

    // if (inputName === "fName") {
    //   setFullName({ fName: newValue });
    // } else if (inputName === "lName") {
    //   setFullName({ lName: newValue });
    // }

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  // function changeLName(event) {
  //   setLName(event.target.value);
  // }

  // function handleClick(event) {
  //   setHeading(fName);
  //   setHeading(LName);

  //   event.preventDefault(); // Prevent form from submitting
  // }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.LName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
