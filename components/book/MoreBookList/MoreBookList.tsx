import { DEFAULT_BOOKS_LIMIT, fetchBooks } from 'hooks/useBooks'
import { BookList } from 'components/book'

export default async function MoreBookList({
  genreId,
}: {
  genreId?: string | string[]
}) {
  const limit = DEFAULT_BOOKS_LIMIT
  let data = await fetchBooks(limit, genreId)

  const onClickMore = async () => {
    data = await fetchBooks(limit + 2, genreId)
  }

  return (
    <div>
      {data && <BookList books={data.books} />}
      <button onClick={onClickMore}>More Books</button>
    </div>
  )
}
