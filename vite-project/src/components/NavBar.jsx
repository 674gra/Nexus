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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#footer">Contact</a>
        </div>
     </nav>
    </>
  )
}

export default NavBar