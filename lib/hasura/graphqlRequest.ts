import request from 'graphql-request'

export default async function graphqlRequest(query: string, params: object) {
  return request(process.env.API_ENDPOINT || '', query, params, {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '',
  })
}
