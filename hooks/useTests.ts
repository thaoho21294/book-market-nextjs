import { clientGraphqlRequest } from 'lib/harsura'
import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

export const DEFAULT_TESTS_LIMIT = 3
export interface Test {
  id: number
  name: string
}

const testsQueryDocument = gql`
  query getTests($limit: Int = 10) {
    tests(limit: $limit) {
      id
      name
    }
  }
`

export const fetchTests = (limit: number) => {
  return clientGraphqlRequest<{ tests: Array<Test> }>(testsQueryDocument, {
    limit,
  })
}

export const useTests = (limit: number) => {
  return useQuery(['tests', limit], () => fetchTests(limit))
}

export default useTests
