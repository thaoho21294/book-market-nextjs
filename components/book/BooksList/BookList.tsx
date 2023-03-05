import React from 'react'

import { Book } from 'types'

import BookCard from '../BookCard'
import styles from './BookList.module.css'

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className={styles.listingContainer}>
      {books.map((b) => (
        <BookCard book={b} key={b.id} />
      ))}
    </div>
  )
}

export default BookList
