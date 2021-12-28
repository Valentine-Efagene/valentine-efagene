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
import Snackbar from '@mui/material/Snackbar'

export default function Social({ className }) {
  const [active, setActive] = useState()
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [snackBarMessage, setSnackBarMessage] = useState(false)

  const toggle = () => {
    setActive((prevState) => !prevState)
  }

  return (
    <div
      className={`${styles.menu} ${active ? styles.active : ''} ${className}`}
    >
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={() => {
          setOpenSnackBar(false)
        }}
        message={snackBarMessage}
      />
      <div className={styles.toggle} onClick={toggle}>
        <AddIcon />
      </div>
      <li style={{ '--i': 0 }}>
        <a
          href="https://web.facebook.com/valentine.efagene"
          target={'_blank'}
          rel="noreferrer"
        >
          <FacebookIcon
            className={styles.facebookIcon}
            style={{ color: 'blue' }}
          />
        </a>
      </li>
      <li style={{ '--i': 1 }}>
        <a href="https://wa.me/+23453229765" target={'_blank'} rel="noreferrer">
          <WhatsAppIcon
            className={styles.whatsappIcon}
            style={{ color: 'green' }}
          />
        </a>
      </li>
      <li
        style={{ '--i': 2 }}
        onClick={() => {
          setSnackBarMessage(
            `Sorry, I'm not on Instagram yet. This button is a reminder for me.`
          )
          setOpenSnackBar(true)
        }}
      >
        <a>
          <TwitterIcon
            className={styles.twitterIcon}
            style={{ color: 'blue' }}
          />
        </a>
      </li>
      <li
        style={{ '--i': 3 }}
        onClick={() => {
          setSnackBarMessage(
            `Sorry, I'm not on Instagram yet.  This button is a reminder for me.`
          )
          setOpenSnackBar(true)
        }}
      >
        <a>
          <InstagramIcon
            className={styles.instagramIcon}
            style={{ color: 'purple' }}
          />
        </a>
      </li>
      <li style={{ '--i': 4 }}>
        <a
          href="https://www.linkedin.com/in/valentine-efagene-1b81681a2/"
          target={'_blank'}
          rel="noreferrer"
        >
          <LinkedInIcon
            className={styles.linkedInIcon}
            style={{ color: 'blue' }}
          />
        </a>
      </li>
      <li style={{ '--i': 5 }}>
        <a
          href="https://github.com/Valentine-Efagene"
          target={'_blank'}
          rel="noreferrer"
        >
          <GitHubIcon className={styles.githubIcon} />
        </a>
      </li>
      <li style={{ '--i': 6 }}>
        <a
          href="mailto:efagenevalentine@gmail.com"
          target={'_blank'}
          rel="noreferrer"
        >
          <EmailIcon className={styles.emailIcon} />
        </a>
      </li>
      <li style={{ '--i': 7 }}>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCOp4pUKPXy7Nsz7XE-ttBWQ"
        >
          <YouTubeIcon
            className={styles.youtubeIcon}
            style={{ color: 'red' }}
          />
        </a>
      </li>
    </div>
  )
}

Social.propTypes = {
  className: string,
}
