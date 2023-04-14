import styles from './Footer.module.scss'

const Footer = () => {
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

export default Footer
