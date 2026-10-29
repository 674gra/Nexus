import React from 'react'
import styles from '../styles/About.module.css'
import im from '../assets/ft.png'
function About() {
  return (
    <div className={styles.container}>
        <h1>About</h1>

        <div className={styles.div}>
            <img src={im} alt="" className={styles.im}/>
                   <p className={styles.p}>I am a Computer science Student and an aspiring full-stack developer
            currently working on my skills regarding the front-end side of development. As of now,
            i am working on React and Nextjs to build a clean, modern and fast product.
            Taking one step to achieve my goal, i am now enrolled to the nexus
            Advanced Front-End boot camp where i am currently 
            learning react.        </p>
        </div>
 
    </div>
  )
}

export default About