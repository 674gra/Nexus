import React from 'react'
import styles from '../styles/SkillsCard.module.css'
function SkillsCard({name,icon}) {
  return (
    <>
    <div className={styles.container}>
       
        <i className={icon} alt="" />
        <div>
            <h2>{name}</h2>
        </div>
    </div>
    </>
  )
}

export default SkillsCard