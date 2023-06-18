import { useState } from 'react'

import { DEFAULT_BOOKS_LIMIT, useBooks } from 'hooks/useBooks'
import { BookList } from 'components/book'

type MoreBookListProps = {
  isError: any
  genreId?: string | string[]
}

const MoreBookList = ({ isError, genreId }: MoreBookListProps) => {
  const [limit, setLimit] = useState(DEFAULT_BOOKS_LIMIT)
  const { data, isLoading } = useBooks(limit, genreId)

  const onClickMore = () => {
    setLimit(limit + DEFAULT_BOOKS_LIMIT)
  }

  return (
    <div>
      {isError && <p>Error happens</p>}
      {isLoading && <p>Loading</p>}
      {data && <BookList books={data.books} />}
      <button onClick={onClickMore}>More Books</button>
    </div>
  )
}

export default MoreBookList
