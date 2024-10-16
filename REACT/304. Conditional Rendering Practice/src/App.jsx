import React from "react";
import Form from "./components/form";
import Login from "./components/login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {userIsRegistered ? <Login /> : <Form />} */}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
