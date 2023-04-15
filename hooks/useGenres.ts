import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { clientGraphqlRequest } from 'lib/harsura'
import { Genre } from 'types'

const genresQueryDocument = gql`
  query MyQuery {
    genres {
      id
      name
      slug
    }
  }
`

export const fetchGenres = () => {
  return clientGraphqlRequest<{ genres: Genre[] }>(genresQueryDocument)
}

export const useGenres = () => {
  return useQuery(['genres'], () => fetchGenres())
}

export default useGenres
