import React from 'react'
import { Book } from '../../../types'
import BookCard from '../BookCard'
import styles from './BookList.module.css'

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className={styles.listingContainerStyle}>
      {books.map((b, index) => (
        <BookCard book={b} key={b.id} eager={index === 0} />
      ))}
    </div>
  )
}

export default BookList
