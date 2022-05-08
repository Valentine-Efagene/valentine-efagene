import React from 'react'
import styles from './spongebob.module.css'

export default function index() {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <span className={styles.navItem}>Home</span>
        <span className={styles.navItem}>Home</span>
        <span className={styles.navItem}>Home</span>
        <span className={styles.navItem}>Home</span>
        <span className={styles.navItem}>Home</span>
      </div>
      <section className={styles.hero}>
        <div className={styles.text}>
          <h1>I love Spongebob</h1>
          <span>
            If you don't like that, take it, go kiss a flugnarg (MVA reference).
          </span>
        </div>
        <img className={styles.img} src="/img/spongebob-pride.png" alt="" />
      </section>
      <section className={styles.characters}>
        <div className={styles.imgs}>
          <img className={styles.img} src="/img/telescope.png" alt="" />
          <img className={styles.img} src="/img/telescope.png" alt="" />
          <img className={styles.img} src="/img/telescope.png" alt="" />
        </div>
        <div className={styles.text}>
          <h1>I love Spongebob</h1>
          <span>
            If you don't like that, take it, go kiss a flugnarg (MVA reference).
          </span>
        </div>
      </section>
      <section className={styles.hero}>
        <div className={styles.text}>
          <h1>I love Spongebob</h1>
          <span>
            If you don't like that, take it, go kiss a flugnarg (MVA reference).
          </span>
        </div>
        <img className={styles.img} src="/img/telescope.png" alt="" />
      </section>
    </div>
  )
}
