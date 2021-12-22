import { any } from 'prop-types'
import { string } from 'prop-types'
import React from 'react'
import styles from './CardsButton.module.css'

export default function CardsButton({ children, link }) {
  return (
    <a className={styles.cardsButton} href={link}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>{children}</span>
      {/* <span class="fab fa-facebook"></span> */}
    </a>
  )
}

CardsButton.propTypes = {
  children: any,
  link: string,
}
