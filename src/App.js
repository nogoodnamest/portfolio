import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>This is the Home Page where you have a counter for how many times you clicked</h2>
      <p>You clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

function About() {
  return <h2> This is the About Page for COGS 125 interactive app assignment</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;