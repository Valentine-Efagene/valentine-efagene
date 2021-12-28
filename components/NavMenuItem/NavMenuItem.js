import React from 'react'
import { func, any, string } from 'prop-types'
import styles from './NavMenuItem.module.css'
import Tooltip from '@mui/material/Tooltip'
import { useRouter } from 'next/router'

export default function NavMenuItem({
  onClick,
  onBlur,
  children,
  tooltipTitle,
  href,
}) {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Tooltip title={tooltipTitle} arrow>
      <a
        onClick={handleClick}
        onBlur={onBlur}
        className={`${styles.menuItem}  ${
          router.asPath === href ? styles.activeLink : ''
        }`}
      >
        {children}
      </a>
    </Tooltip>
  )
}

NavMenuItem.propTypes = {
  onClick: func,
  onBlur: func,
  children: any,
  tooltipTitle: string,
  href: string,
}
