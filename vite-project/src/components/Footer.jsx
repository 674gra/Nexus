import React from 'react'
import ic from '../assets/gmail.gif'
import ph from '../assets/phone.gif'
import styles from '../styles/Contact.module.css'
function Footer() {
  return (
    <>
        <h1 className={styles.h1}>Contact</h1>
        <div className={styles.container} id='footer'>
           
            <div className={styles.div}>
            <p><img src={ic}></img> <span>amanuelfekadu37@gmail.com</span></p>
            <p><img src={ph} alt="" /> <span>+251991210819</span></p>
            </div>
            <div>
                <p>home</p>
                <p>about</p>
                <p>skills</p>
                <p>projects</p>
            </div>
    
            <div>
                <p>&copy; 2026 Amanuel Fekadu All rights reserved</p>
            </div>
        </div>
        </>
  )
}

export default Footer