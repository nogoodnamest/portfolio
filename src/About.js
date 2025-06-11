import React from "react";
import "./About.css";
import profilePic from './langchen.png'; // <-- place your profile image here

function About() {
  return (
    <div className="about-container">
      <div className="profile-left">
        <img src={profilePic} alt="Langchen Xiang" className="profile-image" />
      </div>
      <div className="profile-right">
        <h1>Langchen Xiang</h1>
        <h3>Mathematics & Computer Science @ UCSD</h3>
        <p>
          Greetings! I'm Langchen, a junior at UCSD majoring in Mathematics and Computer Science, passionate about Human-Computer Interaction (HCI) and VR/AR/XR innovation. I love exploring how emerging technologies can transform our interactions with the world.
        </p>
        <p>
          With hands-on experience in software development, game design, and HCI research, I’m committed to building creative, user-centered solutions. Open-minded, dedicated, and adaptable, I’m excited to keep growing, collaborating, and creating impact in the dynamic world of technology!
        </p>
        <p>
          I also love 3D printing, FPV drone, Electronic gadgets, and Lots of outdoor sports!
        </p>
        <p>
          I am open to Jobs! Check out my project portfolio and other links! 
        </p>
        <div className="about-links">
          <a href="mailto:laxiang@ucsd.edu" target="_blank" rel="noreferrer">
            📧 laxiang@ucsd.edu
          </a>
          <a href="https://www.linkedin.com/in/langchen-xiang-42103b214/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a href="https://nogoodnamest.github.io/portfolio" target="_blank" rel="noreferrer">🌐 Portfolio</a>
          <a href="https://linktr.ee/langchen" target="_blank" rel="noreferrer">🧭 Linktree</a>
        </div>
      </div>
    </div>
  );
}

export default About;