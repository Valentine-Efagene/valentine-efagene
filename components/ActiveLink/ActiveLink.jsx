import React from 'react'
import { useRouter } from 'next/router'
import { any, string } from 'prop-types'
import styles from './ActiveLink.module.css'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${styles.navLink}  ${
        router.asPath === href ? styles.activeLink : ''
      }`}
    >
      {children}
    </a>
  )
}

ActiveLink.propTypes = { children: any, href: string }

export default ActiveLink
