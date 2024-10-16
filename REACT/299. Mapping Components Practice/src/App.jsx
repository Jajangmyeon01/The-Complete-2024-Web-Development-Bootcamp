import React from "react";
import { Signin } from "./components/auth/signin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { WelcomePage } from "./components/WelcomePage";
import { Signup } from "./components/auth/Signup";
import { Error404 } from "./components/Error404";
import { Dashboard } from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        {/* create navbar */}
        {/* pwede mo i separate tong navbar as component, for now ganyan muna */}
        <nav className="p-4 d-flex align-items-center justify-content-end gap-3 bg-dark">
          <Link className="text-white text-decoration-none" to="/">
            Home
          </Link>
          <Link className="text-white text-decoration-none" to="/signin">
            Sign In
          </Link>
          <Link className="text-white text-decoration-none" to="/signup">
            Sign Up
          </Link>
          <Link className="text-white text-decoration-none" to="/dashboard">
            Dashboard
          </Link>
        </nav>
        <Routes>
          {/* index page */}
          <Route path="/" exact element={<WelcomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* 404 page */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <footer>Copyright &copy; 2023</footer>
    </>
  );
};

export default App;
