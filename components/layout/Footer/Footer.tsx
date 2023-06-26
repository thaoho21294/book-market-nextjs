'use client'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>About Page</div>
        <div>Contact</div>
      </div>

      <div className={styles.bottom}>Copyright ...</div>
    </footer>
  )
}
