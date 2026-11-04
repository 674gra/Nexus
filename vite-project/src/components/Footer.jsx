import React from 'react'
import ic from '/fly.gif'
import ph from '/git.gif'
import lh from '/link.gif'
import styles from '../styles/Contact.module.css'
function Footer() {
  return (
    <>
        <div className={styles.container} id='footer'>
           
            <div className={styles.div}>
                <h5>CONTACTS</h5>
               <a href="https://t.me/himothiy"> <p><img src={ic}></img> </p></a>
               <a href="https://github.com/AMANUEL-FEKADU"> <p><img src={ph} alt="" /> </p></a>
               <a href="https://www.linkedin.com/"> <p><img src={lh} alt="" /> </p></a>
            
            </div>
            <div className={styles.div}>
                <h5>COMPANY</h5>
                <p>HOME</p>
                <p>ABOUT</p>
                <p>SKILLS</p>
                <p>PROJECTS</p>
            </div>
            <div className={styles.div}>
                <h5>SERVICE</h5>
                <p>UI/UX</p>
                <p>Front-end web development</p>
            </div>
    
            
        </div>
                <p  className={styles.p}>&copy; 2026 Amanuel Fekadu All rights reserved</p>

        </>
  )
}

export default Footer