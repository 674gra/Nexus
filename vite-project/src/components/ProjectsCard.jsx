import React from 'react'
import styles from './ProjectsCard.module.css'
function ProjectsCard({projects}) {
    const {title,description,tech, image,live,github}=projects
  return (
    <>
    <div className={styles.container}>
        <div className={styles.imgdiv}>
        <img src={image} alt="" />
        </div>
        <div>
            <ul>
                <li><h3>title: {title}</h3></li>
               <li><h3>description: <span>{description}</span></h3></li>
               <li><h3>tech: <span>{tech}</span></h3></li>
                <li><h3>live-link: <a href="">{live}</a></h3></li>
                <li><h3>github: <a href="">{github}</a></h3> </li>
            </ul>
        </div>

    </div>
    </>
  )
}

export default ProjectsCard