import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Icon, Image, Menu } from 'semantic-ui-react'
import { menuItems } from '../../constants'
import { useFetchUser } from '../../lib/user'
import styles from '../../styles/Navbar.module.scss'
import classNames from 'classnames'

const Navbar = () => {
  const { user, loading } = useFetchUser({ required: false })
  const router = useRouter()
  console.log(styles)

  // const [activeItem, setActiveItem] = useState('')
  const renderMenuItem = () => {
    return menuItems.map(({ name, url }, index) => (
      <a key={index} href={url} className={styles['navLink']}>
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
