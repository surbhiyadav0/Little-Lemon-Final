import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Projects.css';
import project1 from '../assets/images/project1.svg';
import project2 from '../assets/images/project2.svg';
import project3 from '../assets/images/project3.svg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'React Dashboard',
      description: 'A comprehensive dashboard built with React and Material UI',
      image: project1,
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with shopping cart functionality',
      image: project2,
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Real-time weather forecasting application using OpenWeather API',
      image: project3,
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button className="project-link">
                See more <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
