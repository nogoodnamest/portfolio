import React from 'react';
import './Profilo.css'; // You'll create this for styling
import project1Image from './Icon-180 1.png';
import project2Image from './vrchat.png';
import project3Image from './logo.svg';

const projects = [
  {
    title: 'Interactive React App',
    description: 'A multi-page React app deployed on GitHub Pages.',
    image: project3Image,
    link: 'https://github.com/nogoodnamest/3-interactive-app'
  },
  {
    title: 'VR Scanner Game',
    description: 'Unity-based VR scanner mechanic for VRChat world.',
    image: project2Image,
    link: 'https://github.com/KiichiroWang/MAVERiC-Project'
  },
  {
    title: 'Eco Product Analyzer',
    description: 'Figma UI prototype showing product sustainability info.',
    image: project1Image,
    link: 'https://www.figma.com/design/2TqSUl0WwzFCij5g5C2h0A/COGS-120--A4--Copy-?node-id=1-3&t=xxUAEmgzs6gsBQCb-1'
  }
];

function Profilo() {
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

export default Profilo;