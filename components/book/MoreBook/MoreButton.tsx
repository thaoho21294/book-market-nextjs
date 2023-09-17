'use client'

import {
  DEFAULT_BOOKS_LIMIT,
  DEFAULT_BOOKS_LOAD,
  fetchBooks,
} from 'hooks/useBooks'
import { BookList } from 'components/book'
import { useState } from 'react'
import { Book } from 'types'

export default function MoreBookButton({
  genreId,
}: {
  genreId?: string | string[]
}) {
  const [limit, setLimit] = useState(DEFAULT_BOOKS_LIMIT + DEFAULT_BOOKS_LOAD)
  const [offset, setOffset] = useState(DEFAULT_BOOKS_LIMIT)

  const [booksData, setBooksData] = useState<{ books: Book[] }>()

  const handleClick = async () => {
    const data = await fetchBooks(limit, genreId, offset)
    setBooksData(data)
    setLimit(limit + DEFAULT_BOOKS_LOAD)
    setOffset(offset + DEFAULT_BOOKS_LOAD)
  }

  return (
    <>
      {booksData && <BookList books={booksData.books} />}
      <button onClick={handleClick}>More Books</button>
    </>
  )
}
