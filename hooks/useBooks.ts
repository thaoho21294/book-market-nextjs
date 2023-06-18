import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { clientGraphqlRequest } from 'lib/harsura'

import { Book } from '../types'

export const DEFAULT_BOOKS_LIMIT = 5

const returnedBooksFields = `
      id
      title
      author
      price
      original_price
      description
      pictures
      is_sold
      genre {
        name
      }
      user {
        district {
          name
        }
        province {
          name
        }
      }
`

const booksQueryDocument = gql`
  query getBooks($limit: Int = 10) {
    books(limit: $limit) {
      ${returnedBooksFields}
    }
  }
`

const booksQueryByGenreDocument = gql`
  query getBooks($limit: Int = 10, $genreIds: [String!]) {
      books(limit: $limit, where: { genre_id: { _in: $genreIds } }) {
        ${returnedBooksFields}
      }
    }
`

export const fetchBooks = (limit: number, genreIds?: string | string[]) => {
  if (genreIds) {
    return fetchBooksByGenre(limit, genreIds)
  }
  return clientGraphqlRequest<{ books: Book[] }>(booksQueryDocument, { limit })
}

export const fetchBooksByGenre = (
  limit: number,
  genreIds?: string | string[]
) => {
  return clientGraphqlRequest<{ books: Book[] }>(booksQueryByGenreDocument, {
    limit,
    genreIds: typeof genreIds === 'string' ? [genreIds] : genreIds,
  })
}

export const useBooks = (
  limit: number = DEFAULT_BOOKS_LIMIT,
  genreIds?: string | string[]
) => {
  // console.log('key', ['books', limit, genreIds])
  return useQuery(['books', limit, genreIds], () => fetchBooks(limit, genreIds))
}

export default useBooks
