import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";     // <-- add this
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-left">
          <NavLink to="/about" className="site-title">Langchen's Website</NavLink>
        </div>
        <div className="nav-right">
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/resume">Resume</NavLink>       {/* <-- new */}
          <NavLink className="nav-link" to="/projects">Projects</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />                       {/* <-- new */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
