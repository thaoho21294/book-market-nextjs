import classNames from 'classnames'
import { useState } from 'react'
import { menuItems } from '../../../constants'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const [activeItem, setActiveItem] = useState<null | number>(null)
  const el = menuItems.map(({ name, url, id }, index) => (
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
  return <div className={styles['navigation']}>{el}</div>
}

export default Navigation
