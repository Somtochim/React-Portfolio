import React from 'react'

function ProjectCard({src}) {
  return (
    <a href='https://github.com' target='_blank' rel="noopener noreferrer">
    <img className='hover' src={src} alt='viberr logo'/>
    <h3>Viberr</h3>
    <p>Streaming App</p>
    </a>

  )
}

export default ProjectCard 