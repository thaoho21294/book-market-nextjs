import React from 'react'
import Navbar from '../Navbar'
import styles from './RootLayout.module.scss'

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles['root-layout']}>
      <Navbar />
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles['top']}>
          <div>About Page</div>
          <div>Contact</div>
        </div>

        <div className={styles['bottom']}>Copyright ...</div>
      </footer>
    </div>
  )
}

export default RootLayout
