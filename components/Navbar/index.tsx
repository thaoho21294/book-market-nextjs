import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { menuItems } from '../../constants'
import { useFetchUser } from '../../lib/user'
import styles from './Navbar.module.scss'
import classNames from 'classnames'

// temporily use for testing
const Navbar = () => {
  const { loading } = useFetchUser({ required: false })
  console.log(styles)

  const [activeItem, setActiveItem] = useState<null | number>(null)
  const renderMenuItem = () => {
    return menuItems.map(({ name, url, id }, index) => (
      <a
        key={index}
        href={url}
        onClick={() => {
          setActiveItem(id)
        }}
        className={classNames(
          styles['navLink'],
          id === activeItem ? styles['isActive'] : ''
        )}
      >
        {name}
      </a>
    ))
  }

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div className={styles['header-container']}>
      <header className={styles['header']}>
        <a href="#" className={classNames(styles['navIcon'], styles['logo'])}>
          <Icon name="book" size="large" circular color="green"></Icon>
        </a>
        <div className={styles['navHeader']}>{renderMenuItem()}</div>
        <a href="#" className={styles['navIcon']}>
          <Icon size="large" name="search" />
        </a>
        <a
          href="#"
          className={classNames(styles['navIcon'], styles['cartButton'])}
        >
          <Icon size="large" name="cart"></Icon>
        </a>
      </header>
    </div>
  )
}

export default Navbar
