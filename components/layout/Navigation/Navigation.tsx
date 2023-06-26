import { menuItems } from '../../../constants'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {menuItems.map(({ name, url, id }) => (
        <a key={id} href={url} className={styles.navLink}>
          {name}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
