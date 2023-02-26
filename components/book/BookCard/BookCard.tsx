import React from 'react'
import Image from 'next/image'
import { Book } from '../../../types'

const BookCard = ({ book }: { book: Book; eager: boolean }) => {
  return (
    <div>
      <Image
        alt="book picture"
        width="250"
        height="300"
        src={book.pictures[0]}
      />
      <label>{book.title}</label>
      <p>{book.author}</p>
    </div>
  )
}

export default BookCard
