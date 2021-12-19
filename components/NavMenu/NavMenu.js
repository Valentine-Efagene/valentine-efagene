import React, { useRef, useState, useEffect } from 'react'
import styles from './NavMenu.module.css'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu'

export default function NavMenu() {
  const menuRef = useRef()
  const buttonRef = useRef()
  const [menuBtnVisible, setMenuBtnVisible] = useState(true)
  const [menuItemsVisible, setMenuItemsVisible] = useState()

  const initUI = async () => {
    const menu = menuRef.current

    document.body.onscroll = () => {
      setMenuItemsVisible(false)
      setMenuBtnVisible(true)

      if (!menu.classList.contains(styles.navButton)) {
        //menu.style.top = `${10}px`
        //menu.style.right = `${10}px`
        //menu.style.borderWidth = `${3}px`
        //setTimeout(() => {
        menu.classList.remove(styles.navMenu)
        menu.classList.add(styles.navButton)
        //}, 100)
      }
    }
  }

  useEffect(() => {
    initUI()
    return () => {}
  }, [])

  const openMenu = () => {
    const menu = menuRef.current
    menu.classList.remove(styles.navButton)
    menu.classList.add(styles.navMenu)
    setMenuBtnVisible(false)
    setMenuItemsVisible(true)
  }

  return (
    <div ref={menuRef} className={`${styles.navButton}`}>
      {menuBtnVisible && (
        <button
          ref={buttonRef}
          onClick={openMenu}
          className={styles.menuToggle}
        >
          <img src="/menu-icon.svg" className={styles.menuIcon} />
        </button>
      )}
      {menuItemsVisible && (
        <div className={styles.menuItems}>
          <span className={styles.menuItem}>Hello</span>
          <span className={styles.menuItem}>Hello</span>
          <span className={styles.menuItem}>Hello</span>
          <span className={styles.menuItem}>Hello</span>
          <span className={styles.menuItem}>Hello</span>
          <span className={styles.menuItem}>Hello</span>
        </div>
      )}
      <section></section>
    </div>
  )
}
