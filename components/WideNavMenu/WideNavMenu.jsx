import React, { useEffect } from 'react'
import styles from './WideNavMenu.module.css'
import ActiveLink from '../ActiveLink/ActiveLink'
import { string } from 'prop-types'

WideNavMenu.propTypes = {
  light: string,
}

export default function WideNavMenu({ light }) {
  return (
    <div className={`${styles.menu} ${light ? styles.light : ''}`}>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/experience">Experience</ActiveLink>
      <ActiveLink href="/certifications">Certifications</ActiveLink>
      <ActiveLink href="/education">Education</ActiveLink>
    </div>
  )
}
