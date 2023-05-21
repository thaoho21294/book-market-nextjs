import { DEFAULT_BOOKS_LIMIT, useBooks } from 'hooks/useBooks'
import { BookList } from 'components/book'
import { useState } from 'react'

type MoreBookListProps = {
  isError: any
  genreId?: string | string[]
}

const MoreBookList = ({ isError, genreId }: MoreBookListProps) => {
  const [limit, setLimit] = useState(DEFAULT_BOOKS_LIMIT)
  const { data, isLoading } = useBooks(limit, genreId)

  const onClickMore = () => {
    setLimit(limit + 2)
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
