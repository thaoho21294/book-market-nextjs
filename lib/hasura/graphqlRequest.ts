import request from 'graphql-request'

export default async function graphqlRequest(query: string, params: object) {
  return request(process.env.NEXT_PUBLIC_API_ENDPOINT || '', query, params, {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || '',
  })
}
