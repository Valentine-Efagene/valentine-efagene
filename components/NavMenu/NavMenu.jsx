import React, { useRef, useState, useEffect } from 'react'
import styles from './NavMenu.module.css'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import Link from 'next/link'
import ComputerIcon from '@mui/icons-material/Computer'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import SchoolIcon from '@mui/icons-material/School'
import HomeIcon from '@mui/icons-material/Home'

export default function NavMenu() {
  const menuRef = useRef()
  const buttonRef = useRef()
  const [menuBtnVisible, setMenuBtnVisible] = useState(true)
  const [menuItemsVisible, setMenuItemsVisible] = useState()

  const initUI = async () => {
    const menu = menuRef.current

    // Currently useless
    document.body.onscroll = () => {
      setMenuItemsVisible(false)
      setMenuBtnVisible(true)

      if (!menu.classList.contains(styles.navButton)) {
        menu.classList.remove(styles.navMenu)
        menu.classList.add(styles.navButton)
      }
    }

    document.addEventListener('mousedown', closeMenu)
    document.addEventListener('touchstart', closeMenu)

    menu.addEventListener('mouseenter', () => {})
    menu.addEventListener('mouseleave', () => {
      menu.style.transition = '0.5s'

      setTimeout(() => {
        menu.style.transition = null
      }, 100)
    })
  }

  useEffect(() => {
    initUI()
    return () => {
      document.removeEventListener('mousedown', closeMenu)
      document.removeEventListener('touchstart', closeMenu)
      menuRef?.current?.removeEventListener('mouseenter', () => {})
      menuRef?.current?.removeEventListener('mouseleave', () => {}, 5)
    }
  }, [])

  const openMenu = () => {
    const menu = menuRef.current
    menu.classList.remove(styles.navButton)
    menu.classList.add(styles.navMenu)
    setMenuBtnVisible(false)
    setMenuItemsVisible(true)
  }

  const closeMenu = (event) => {
    const menu = menuRef.current

    if (!menuRef || menu.contains(event.target)) {
      return
    }

    menu.classList.add(styles.navButton)
    menu.classList.remove(styles.navMenu)
    setMenuBtnVisible(true)
    setMenuItemsVisible(false)
  }

  return (
    <div ref={menuRef} className={`${styles.navButton}`}>
      {menuBtnVisible && (
        <button
          ref={buttonRef}
          onClick={openMenu}
          onBlur={closeMenu}
          className={styles.menuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      {menuItemsVisible && (
        <div className={styles.menuItems}>
          <NavMenuItem
            href="/"
            className={styles.menuItem}
            tooltipTitle="Home page"
          >
            <HomeIcon /> Home
          </NavMenuItem>
          <NavMenuItem
            href="/projects"
            className={styles.menuItem}
            tooltipTitle={'Some of my projects over the years'}
          >
            <ComputerIcon /> Projects
          </NavMenuItem>
          <NavMenuItem
            tooltipTitle=""
            href="/skills"
            className={styles.menuItem}
          >
            <PhoneIphoneIcon /> Skills
          </NavMenuItem>
          <NavMenuItem
            tooltipTitle=""
            href="/education"
            className={styles.menuItem}
          >
            <SchoolIcon /> Education
          </NavMenuItem>
          {/* <NavMenuItem tooltipTitle="" className={styles.menuItem}>
            <Link href="/location/location">
              <a className={styles.navLink}>
                <MyLocationIcon /> Location
              </a>
            </Link>
          </NavMenuItem> */}
        </div>
      )}
      <section></section>
    </div>
  )
}
