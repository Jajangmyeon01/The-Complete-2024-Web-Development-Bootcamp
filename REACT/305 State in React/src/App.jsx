import React from "react";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration = "none";
}

function App() {
  // var isDone = false;

  // const strikeThrough = { textDecoration: "line-through" };

  // return <p style={isDone ? strikeThrough : null}>Buy milk</p>;

  // document.getElementById("root").style.textDecoration = "line-through";
  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change to non-strike through</button>
    </div>
  );
}

export default App;
