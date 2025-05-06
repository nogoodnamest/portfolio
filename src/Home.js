import React, { useState } from "react";
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home-container">
      <h1> This is the Home Page</h1>
      <p>You clicked the button <strong>{count}</strong> times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Home;