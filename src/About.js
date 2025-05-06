import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>📘 About This Webpage</h1>
      <p>This interactive Webpage was built for the COGS 125 assignment using React Router and GitHub Pages for deployment.</p>
      <ul>
        <li> Navigation with React Router</li>
        <li> Route-generated pages (Home, About, Profilo)</li>
        <li> Interactive counter</li>
        <li> Project cards and GitHub links</li>
      </ul>
    </div>
  );
}

export default About;