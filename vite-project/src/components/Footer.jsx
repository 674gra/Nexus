import React from 'react'
import ic from '/fly.gif'
import ph from '/ph.gif'
import styles from '../styles/Contact.module.css'
function Footer() {
  return (
    <>
        <div className={styles.container} id='footer'>
           
            <div className={styles.div}>
                <h5>CONTACTS</h5>
                <p><img src={ic}></img> <span>amanuelfekadu37@gmail.com</span></p>
                <p><img src={ph} alt="" /> <span>+251991210819</span></p>
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