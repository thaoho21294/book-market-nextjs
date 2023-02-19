import React from 'react'
import { Button } from 'semantic-ui-react'
import BookCard from '../BookCard'
import styles from './BookList.module.scss'

const BookList = () => {
  const renderBookCard = () => {
    return Array(10)
      .fill('books')
      .map((_, index) => (
        <BookCard
          key={index}
          address={`Quan ${index}`}
          title={`Name of book ${index}`}
          price={14000 + index * 10}
          bookImg="https://m.media-amazon.com/images/I/41kuZT-RuGL._AC_UL480_FMwebp_QL65_.jpg"
        />
      ))
  }
  return (
    <div className={styles['container']}>
      <div className={styles['grid']}>{renderBookCard()}</div>
      <Button size="big" color="green">
        More product
      </Button>
    </div>
  )
}

export default BookList
