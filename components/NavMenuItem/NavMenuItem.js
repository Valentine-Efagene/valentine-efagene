import React from 'react'
import { func } from 'prop-types'
import styles from './NavMenuItem.module.css'

export default function NavMenuItem({ onClick, onBlur }) {
  return (
    <span onClick={onClick} onBlur={onBlur} className={styles.menuItem}>
      Hello
    </span>
  )
}

NavMenuItem.propTypes = {
  onClick: 'func',
  onBlur: 'func',
}
