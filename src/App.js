import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profilo from './Profilo';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/about">About</Link>
        <Link className="nav-btn" to="/profilo">Profilo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profilo" element={<Profilo />} />
      </Routes>
    </Router>
  );
}

export default App;