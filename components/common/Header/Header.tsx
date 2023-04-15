import { Icon } from 'semantic-ui-react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import { useFetchUser } from 'lib/user'
import { Navigation } from 'components/ui'
import Link from 'next/link'

const Header = () => {
  const { loading } = useFetchUser({ required: false })

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Link href="/" className={classNames(styles.icon, styles.logo)}>
          <Icon name="book" size="large" />
        </Link>
        <Navigation />
        <Link href="#" className={classNames(styles.icon, styles.searchButton)}>
          <Icon size="large" name="search" />
        </Link>
        <Link href="#" className={classNames(styles.icon, styles.cartButton)}>
          <Icon size="large" name="cart" />
        </Link>
      </header>
    </div>
  )
}

export default Header
