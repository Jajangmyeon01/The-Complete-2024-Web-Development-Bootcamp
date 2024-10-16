import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = useState(time);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    setTimeout(updateTime, 1000); // Update every second
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
