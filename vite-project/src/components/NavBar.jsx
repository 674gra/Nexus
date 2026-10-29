import React from 'react'
import styles from './Nav.module.css'
function NavBar() {
  return (
    <>
     
     <nav className={styles.container}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
     </nav>
    </>
  )
}

export default NavBar