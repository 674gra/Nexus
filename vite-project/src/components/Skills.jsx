import React from 'react'
import { skills } from '../data'
import SkillsCard from './SkillsCard'
import styles from './Skills.module.css'
function Skills() {
  return (
   <>
   <h1 className={styles.h1}>Skills</h1>
   <div className={styles.container}>
    
   {skills.map((item,id)=>(
        <SkillsCard key={id} name={item.name} icon={item.icon}/>
   ))}
   </div>
   </>
  )
}

export default Skills