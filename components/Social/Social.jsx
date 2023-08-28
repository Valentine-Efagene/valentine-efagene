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
    <>
      <Snackbar
        className={styles.snackbar}
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={() => {
          setOpenSnackBar(false)
        }}
        message={snackBarMessage}
      />
      <div
        className={`${styles.menu} ${active ? styles.active : ''} ${className}`}
      >
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
              style={{ color: '#365999' }}
            />
          </a>
        </li>
        <li style={{ '--i': 1 }}>
          <a
            href="https://wa.me/+2349034360573"
            target={'_blank'}
            rel="noreferrer"
          >
            <WhatsAppIcon
              className={styles.whatsappIcon}
              style={{ color: '#25d366' }}
            />
          </a>
        </li>
        <li style={{ '--i': 2 }}>
          <a
            target={'_blank'}
            href="https://twitter.com/Valentyne_VEE"
            rel="noreferrer"
          >
            <TwitterIcon
              className={styles.twitterIcon}
              style={{ color: '#55acee' }}
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
              style={{ color: '#e4405f' }}
            />
          </a>
        </li>
        <li style={{ '--i': 4 }}>
          <a
            href="https://www.linkedin.com/in/valentine-efagene/"
            target={'_blank'}
            rel="noreferrer"
          >
            <LinkedInIcon
              className={styles.linkedInIcon}
              style={{ color: '#0077b5' }}
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
    </>
  )
}

Social.propTypes = {
  className: string,
}
