import React from 'react'
import styles from '../styles/Nav.module.css'
function NavBar() {
  return (
    <>
     
     <nav className={styles.container}>
      <div className={styles.log}>
        <h2>Amanuel Fekadu</h2>
      </div>
      <div className={styles.navs}>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#footer">CONTACTS</a>
        </div>
     </nav>
    </>
  )
}

export default NavBar