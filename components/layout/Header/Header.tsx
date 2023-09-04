import { Icon } from 'components/semantic'
import styles from './Header.module.scss'
import classNames from 'classnames'
import Navigation from 'components/layout/Navigation/Navigation'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <a href="#" className={classNames(styles.icon, styles.logo)}>
          <Icon name="book" size="large"></Icon>
        </a>
        <Navigation />
        <a href="#" className={classNames(styles.icon, styles.searchButton)}>
          <Icon size="large" name="search" />
        </a>
        <a href="#" className={classNames(styles.icon, styles.cartButton)}>
          <Icon size="large" name="cart"></Icon>
        </a>
      </header>
    </div>
  )
}
