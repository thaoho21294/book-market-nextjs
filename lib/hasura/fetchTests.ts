import graphqlRequest from './graphqlRequest'

export const DEFAULT_TESTS_LIMIT = 3

const testsQueryDocument = `
  query getTests($limit: Int = 10) {
    tests(limit: $limit) {
      id
      name
    }
  }
`

export const fetchTests = async (limit = DEFAULT_TESTS_LIMIT) => {
  return graphqlRequest(testsQueryDocument, {
    limit,
  })
}

export default fetchTests
