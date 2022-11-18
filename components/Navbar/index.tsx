import React, { useState } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('')
  const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  ]
  return (
    <Menu secondary fixed="top">
      <Menu.Header>
        <Icon name="book" size="big" circular color="green"></Icon>
      </Menu.Header>
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
        <Menu.Item
          name="logout"
          active={activeItem === 'logout'}
          onClick={() => {
            setActiveItem('logout')
          }}
        />
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
