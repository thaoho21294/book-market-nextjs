import { graphqlRequest, clientGraphqlRequest } from '../lib/harsura'
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

const fetchTests = async (limit = DEFAULT_TESTS_LIMIT) => {
  return graphqlRequest<{ tests: Array<Test> }>(testsQueryDocument, {
    limit,
  })
}

const clientFetchTests = async (limit = DEFAULT_TESTS_LIMIT) => {
  return clientGraphqlRequest<{ tests: Array<Test> }>(testsQueryDocument, {
    limit,
  })
}

const useTests = (limit: number) => {
  return useQuery(['tests', limit], () => clientFetchTests(limit))
}

export { fetchTests, useTests, clientFetchTests }

export default useTests
