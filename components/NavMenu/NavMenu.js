import React, { useRef, useState, useEffect } from 'react'
import styles from './NavMenu.module.css'
import NavMenuItem from '../NavMenuItem/NavMenuItem'

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
        menu.classList.remove(styles.navMenu)
        menu.classList.add(styles.navButton)
      }
    }

    document.addEventListener('mousedown', closeMenu)
    document.addEventListener('touchstart', closeMenu)
  }

  useEffect(() => {
    initUI()
    return () => {
      document.removeEventListener('mousedown', closeMenu)
      document.removeEventListener('touchstart', closeMenu)
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
          <img src="/menu-icon.svg" className={styles.menuIcon} />
        </button>
      )}
      {menuItemsVisible && (
        <div className={styles.menuItems}>
          <NavMenuItem className={styles.menuItem}>Hello</NavMenuItem>
          <NavMenuItem className={styles.menuItem}>Hello</NavMenuItem>
          <NavMenuItem className={styles.menuItem}>Hello</NavMenuItem>
          <NavMenuItem className={styles.menuItem}>Hello</NavMenuItem>
          <NavMenuItem className={styles.menuItem}>Hello</NavMenuItem>
        </div>
      )}
      <section></section>
    </div>
  )
}
