import React from "react";
import { useState } from "react";
import axios from "axios";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (ev) => {
    ev.preventDefault();

    console.log(`username: ${username} password: ${password}`);
  };

  return (
    <>
      <form onSubmit={handleSignin}>
        <label htmlFor="username">Username:</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          id="username"
          name="username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
          name="password"
          required
        />
        <input type="submit" value="Sign In" />
      </form>
    </>
  );
};
