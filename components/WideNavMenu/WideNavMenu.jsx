import Link from 'next/link'
import React from 'react'
import styles from './WideNavMenu.module.css'
import HomeIcon from '@mui/icons-material/Home'

export default function WideNavMenu() {
  return (
    <div className={styles.menu}>
      <span className={styles.menuItem}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
      </span>
      <span className={styles.menuItem}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
      </span>
      <span className={styles.menuItem}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
      </span>
      <span className={styles.menuItem}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
      </span>
      <span className={styles.menuItem}>
        <Link href="/education/education">
          <a className={styles.navLink}>Education</a>
        </Link>
      </span>
    </div>
  )
}
