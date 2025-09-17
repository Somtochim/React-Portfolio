import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from '../common/ProjectCard';
import hipster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
        link='https://github.com' target='_blank' rel="noopener noreferrer"
           src={viberr} 
          h3=" Viberr"
          p="Streaming App"
        />
        <ProjectCard
        link='https://github.com' target='_blank' rel="noopener noreferrer"
           src={freshBurger} 
          h3=" Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
        link='https://github.com' target='_blank' rel="noopener noreferrer"
           src={hipster} 
          h3=" Hipster"
          p="Glasses Store"
        />
        <ProjectCard
        link='https://github.com' target='_blank' rel="noopener noreferrer"
           src={fitLift} 
          h3=" FitLift"
          p="Fitness App"
        />
     
      </div>
    </section> 
  );
}

export default Projects;