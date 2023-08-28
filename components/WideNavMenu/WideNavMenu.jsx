import React, { useEffect } from 'react'
import styles from './WideNavMenu.module.css'
import ActiveLink from '../ActiveLink/ActiveLink'

export default function WideNavMenu({ light }) {
  return (
    <div className={`${styles.menu} ${light ? styles.light : ''}`}>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/projects">Projects</ActiveLink>
      <ActiveLink href="/skills">Skills</ActiveLink>
      <ActiveLink href="/education">Education</ActiveLink>
    </div>
  )
}
