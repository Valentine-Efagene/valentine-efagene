import Link from 'next/link'
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
      <ActiveLink href="desktop/desktop">Desktop</ActiveLink>
      <ActiveLink href="/mobile/mobile">Mobile</ActiveLink>
      <ActiveLink href="/education/education">Education</ActiveLink>
      <ActiveLink href="/location/location"></ActiveLink>
    </div>
  )
}
