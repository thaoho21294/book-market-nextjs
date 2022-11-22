import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Dropdown, Icon, Image, Input, Menu } from 'semantic-ui-react'
import { useFetchUser } from '../../lib/user'

const Navbar = () => {
  const { user, loading } = useFetchUser({ required: false })
  const router = useRouter()

  const [activeItem, setActiveItem] = useState('')
  const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  ]

  console.log(user)
  if (loading) {
    return 'Loading....'
  }
  return (
    <Menu secondary fixed="top">
      <Menu.Item>
        <Icon name="book" size="big" circular color="green"></Icon>
      </Menu.Item>
      <Menu.Item>
        <Dropdown
          placeholder="Select Country"
          fluid
          search
          selection
          options={countryOptions}
        />
      </Menu.Item>
      <Menu.Item>
        <Dropdown
          placeholder="Select Country"
          fluid
          search
          selection
          options={countryOptions}
        />
      </Menu.Item>
      <Menu.Item
        name="friends"
        active={activeItem === 'friends'}
        onClick={() => {
          setActiveItem('friends')
        }}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search..."
            onClick={() => {
              setActiveItem('search')
            }}
          />
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
