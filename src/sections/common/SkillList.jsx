import React from 'react'
import styles from '../Skills/skillStyles.module.css'


function SkillList({src,skill}) {
  return (
    <span>
      <img className={styles.skillImg} src={src } alt="Checkmark Icon" />
      <p>{skill}</p>
    </span>
  )
}

export default SkillList