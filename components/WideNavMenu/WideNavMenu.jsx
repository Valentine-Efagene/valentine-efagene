import React, { useEffect } from 'react'
import styles from './WideNavMenu.module.css'
import ActiveLink from '../ActiveLink/ActiveLink'

export default function WideNavMenu() {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className={styles.menu}>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/projects">Projects</ActiveLink>
      <ActiveLink href="/skills">Skills</ActiveLink>
      <ActiveLink href="/education">Education</ActiveLink>
    </div>
  )
}
