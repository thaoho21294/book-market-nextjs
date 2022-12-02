import { useQuery } from '@tanstack/react-query'
import graphqlRequest from '../lib/hasura/graphqlRequest'

const testsQueryDocument = `
  query getTests($limit: Int = 10) {
    tests(limit: $limit) {
      id
      name
    }
  }
`

const fetchTests = async (limit = 10) => {
  return graphqlRequest(testsQueryDocument, {
    limit,
  })
}

const useTests = (limit = 10) => {
  return useQuery(['tests', limit], () => fetchTests(limit))
}

export { fetchTests, useTests }
