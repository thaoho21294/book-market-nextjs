import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Icon, Image, Menu } from 'semantic-ui-react'
import { menuItems } from '../../constants'
import { useFetchUser } from '../../lib/user'
import styles from '../../styles/Navbar.module.scss'

const Navbar = () => {
  const { user, loading } = useFetchUser({ required: false })
  const router = useRouter()

  const [activeItem, setActiveItem] = useState('')
  const renderMenuItem = () => {
    return menuItems.map(({ name, url }, index) => (
      <Menu.Item
        key={index}
        name={name}
        active={activeItem === name}
        onClick={() => {
          router.push(url)
          setActiveItem(name)
        }}
      />
    ))
  }

  if (loading) {
    return <>Loading...</>
  }

  return (
    <Menu fixed="top" secondary className={styles['menu-container']}>
      <Menu.Item>
        <Icon name="book" size="big" circular color="green" />
      </Menu.Item>
      {renderMenuItem()}
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name="book" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="search" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="cart" />
        </Menu.Item>
        {!user && (
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={() => {
              router.push('/api/login')
              setActiveItem('login')
            }}
          />
        )}
        {user && (
          <>
            <Menu.Item>
              <Image alt="" src={user.picture} avatar />
              <span>{user.nickname}</span>
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={() => {
                router.push('/api/logout')
                setActiveItem('logout')
              }}
            />
          </>
        )}
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
