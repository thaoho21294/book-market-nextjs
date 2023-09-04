import { fetchBooks } from 'hooks/useBooks'
import { BookList } from 'components/book'

export default async function MoreBookList({
  genreId,
  limit,
  offset,
}: {
  genreId?: string | string[]
  limit?: number
  offset?: number
}) {
  let data = await fetchBooks(limit, genreId, offset)

  return <div>{data && <BookList books={data.books} />}</div>
}
