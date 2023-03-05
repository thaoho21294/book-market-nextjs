import { Icon } from 'semantic-ui-react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import { useFetchUser } from '../../../lib/user'
import { Navigation } from '../../ui'

// temporily use for testing
const Navbar = () => {
  const { loading } = useFetchUser({ required: false })

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <a href="#" className={classNames(styles.navIcon, styles.logo)}>
          <Icon name="book" size="large" color="green"></Icon>
        </a>
        <Navigation />
        <a href="#" className={classNames(styles.navIcon, styles.searchButton)}>
          <Icon size="large" name="search" />
        </a>
        <a href="#" className={classNames(styles.navIcon, styles.cartButton)}>
          <Icon size="large" name="cart"></Icon>
        </a>
      </header>
    </div>
  )
}

export default Navbar
