import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from './Portfolio';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-left">
          <Link className="nav-btn" to="/about">About</Link>
          <Link className="nav-btn" to="/portfolio">Portfolio</Link>
        </div>
        <div className="nav-center">
          <span className="site-title">Langchen Xiang</span>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />         {/* About is now the homepage */}
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;