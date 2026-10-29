import React from 'react'
import { projects } from '../data'
import ProjectsCard from './ProjectsCard'
import styles from './Projects.module.css'
function Projects() {
  return (
    <>
    <h1 className={styles.h1}>Projects</h1>
    <div className={styles.container}>
      {projects.map(item=>(
        <ProjectsCard key={item.id} projects={item}/>
      ))}
      </div>
    </>
  )
}

export default Projects