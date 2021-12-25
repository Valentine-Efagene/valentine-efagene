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
      <ActiveLink href="/projects/projects">Projects</ActiveLink>
      <ActiveLink href="/mobile/mobile">Skills</ActiveLink>
      <ActiveLink href="/education/education">Education</ActiveLink>
      {/* <ActiveLink href="/location/location"></ActiveLink> */}
    </div>
  )
}
