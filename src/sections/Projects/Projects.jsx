import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <a href='https://github.com' target='_blank' rel="noopener noreferrer">
          <img className='hover' src={viberr} alt='viberr logo' />
        </a>
      </div>
    </section> 
  );
}

export default Projects;