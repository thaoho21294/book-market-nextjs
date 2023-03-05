import classNames from 'classnames'
import { useMemo, useState } from 'react'
import { menuItems } from '../../../constants'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const [activeItem, setActiveItem] = useState<null | number>(null)
  const el = useMemo(
    () =>
      menuItems.map(({ name, url, id }, index) => (
        <a
          key={index}
          href={url}
          onClick={() => {
            setActiveItem(id)
          }}
          className={classNames(
            styles.navLink,
            id === activeItem ? styles.isActive : ''
          )}
        >
          {name}
        </a>
      )),
    [activeItem]
  )
  return <nav className={styles.navigation}>{el}</nav>
}

export default Navigation
