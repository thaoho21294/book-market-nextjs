import classNames from 'classnames'
import { useMemo, useState } from 'react'
import styles from './Navigation.module.scss'
import useGenres from 'hooks/useGenres'
import Link from 'next/link'

const Navigation = () => {
  const { data } = useGenres()
  const [activeItem, setActiveItem] = useState<string>()
  const el = useMemo(
    () =>
      data?.genres.map(({ name, id }, index) => (
        <Link
          key={index}
          href={`/products/${id}`}
          onClick={() => {
            setActiveItem(id)
          }}
          className={classNames(
            styles.navLink,
            id === activeItem ? styles.isActive : ''
          )}
        >
          {name}
        </Link>
      )),
    [data?.genres, activeItem]
  )
  return <nav className={styles.navigation}>{el}</nav>
}

export default Navigation
