import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>👋 Welcome to My Portfolio</h1>
      <p>This site showcases some of my recent interactive and creative projects.</p>
      <a className="home-cta" href="#/portfilo"> View My Work</a>
    </div>
  );
}

export default Home;