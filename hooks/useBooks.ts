import { clientGraphqlRequest } from '../lib/harsura'
import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import { Book } from '../types'

export const DEFAULT_BOOKS_LIMIT = 10

const booksQueryDocument = gql`
  query getBooks($limit: Int = 10) {
    books(limit: $limit) {
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
    }
  }
`

export const fetchBooks = (limit: number) => {
  return clientGraphqlRequest<{ books: Book[] }>(booksQueryDocument, {
    limit,
  })
}

export const useBooks = (limit: number = DEFAULT_BOOKS_LIMIT) => {
  return useQuery(['books', limit], () => fetchBooks(limit))
}

export default useBooks
