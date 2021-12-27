import React, { useEffect, useRef, useState } from 'react'
import styles from './Social.module.css'
import AddIcon from '@mui/icons-material/Add'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { string } from 'prop-types'

export default function Social({ className }) {
  const [active, setActive] = useState()

  const toggle = () => {
    setActive((prevState) => !prevState)
  }

  return (
    <div
      className={`${styles.menu} ${active ? styles.active : ''} ${className}`}
    >
      <div className={styles.toggle} onClick={toggle}>
        <AddIcon />
      </div>
      <li style={{ '--i': 0 }}>
        <a href="#">
          <FacebookIcon />
        </a>
      </li>
      <li style={{ '--i': 1 }}>
        <a href="#">
          <WhatsAppIcon />
        </a>
      </li>
      <li style={{ '--i': 2 }}>
        <a href="#">
          <TwitterIcon />
        </a>
      </li>
      <li style={{ '--i': 3 }}>
        <a href="#">
          <InstagramIcon />
        </a>
      </li>
      <li style={{ '--i': 4 }}>
        <a href="#">
          <LinkedInIcon />
        </a>
      </li>
      <li style={{ '--i': 5 }}>
        <a href="#">
          <GitHubIcon />
        </a>
      </li>
      <li style={{ '--i': 6 }}>
        <a href="#">
          <EmailIcon />
        </a>
      </li>
      <li style={{ '--i': 7 }}>
        <a href="#">
          <YouTubeIcon />
        </a>
      </li>
    </div>
  )
}

Social.propTypes = {
  className: string,
}
