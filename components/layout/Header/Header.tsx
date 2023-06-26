import { Icon } from 'semantic-ui-react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import { Navigation } from '../../form'

export default async function Header() {
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
