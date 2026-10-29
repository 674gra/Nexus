import React from 'react'
import Styles from '../styles/Hero.module.css'
import vid from '/Video.mp4'
function Hero() {
  return (
    <div className={Styles.Container}>
        <div className={Styles.div}>
            <h1>Welcome to my corner of the web</h1>
            <p className={Styles.p}>I’m a student developer turning classroom 
                theories into real-world applications. This portfolio tracks my journey, technical skills, and creative projects as I transition from student to professional. Let's build something cool together!

            </p>

            <button className={Styles.bt}>See Projects</button>
        </div>
        
        <video src={vid} className={Styles.vid} autoPlay loop muted playsInline></video>
    </div>
  )
}

export default Hero