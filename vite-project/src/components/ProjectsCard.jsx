import React from 'react'
import styles from '../styles/ProjectsCard.module.css'
function ProjectsCard({projects}) {
    const {title,description,tech, image,live,github,banner}=projects
  return (
    <>
    <div className={styles.container}>
        <div className={styles.imgdiv}>
        <img src={image} alt="" />
            <h5>{banner}</h5>

        </div>
        <div>
            <ul>
                <li><h3>{title}</h3></li>
               <li><h3><span>{description}</span></h3></li>
               <li><h3 className={styles.h3}>{tech.map((ele,i)=>(
                <span key={i} className={styles.tech}> {ele} </span>
               ))}</h3></li>

            
                    <div className={styles.lis}>
                        <a href={live} target="_blank" rel="noopener noreferrer"> <button className={styles.bt}><img src="/iccc.png" alt=""/>visit</button></a>
                       {github&&<a href={github} target="_blank" rel="noopener noreferrer"> <button className={styles.bt}> <img src="/gg.gif" alt="" className={styles.gg}/> get code</button></a>}  

                    </div>
            
            
            </ul>
        </div>

    </div>
    </>
  )
}

export default ProjectsCard