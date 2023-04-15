import { Book } from 'types'

import BookCard from '../BookCard'
import styles from './BookList.module.css'

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className={styles.listingContainer}>
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  )
}

export default BookList
