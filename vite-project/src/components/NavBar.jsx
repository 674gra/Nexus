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
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        </div>
     </nav>
    </>
  )
}

export default NavBar