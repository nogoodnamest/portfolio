import React from 'react';
import './Projects.css'; // You'll create this for styling
import project1Image from './Icon-180 1.png';
import project2Image from './vrchat.png';
import project3Image from './logo.svg';
import project4Image from './Snipaste_2025-06-11_01-04-42.png'

const projects = [
  {
    title: 'Interactive React App',
    description: 'A multi-page React app deployed on GitHub Pages.',
    image: project3Image,
    link: 'https://github.com/nogoodnamest/3-interactive-app'
  },
  {
    title: 'Detective VRChat Game',
    description: 'Unity-based VR Detective game, where you need to uncover clues of the past with a scanner to solve the mystery of the stolen diamond, published in VRChat world.',
    image: project2Image,
    link: 'https://github.com/KiichiroWang/MAVERiC-Project'
  },
  {
    title: 'Eco Product Analyzer',
    description: 'Figma UI prototype designed to scan and display product sustainability info through wide product database.',
    image: project1Image,
    link: 'https://www.figma.com/design/2TqSUl0WwzFCij5g5C2h0A/COGS-120--A4--Copy-?node-id=1-3&t=xxUAEmgzs6gsBQCb-1'
  },
  {
  title: 'SimuLife',
  description: 'Simulated AI-driven social behaviors using multi-agent interactions in VR, built in Unity.',
  image: project4Image,
  link: 'https://www.youtube.com/watch?v=OXoI37C-6JE'
  }
];

function Projects() {
  return (
    <div className="profilo-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;