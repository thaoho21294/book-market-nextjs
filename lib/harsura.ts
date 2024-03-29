import request, { Variables } from 'graphql-request'

export default function graphqlRequest<T>(query: string, params: Variables) {
  return request<T>(process.env.API_ENDPOINT || '', query, params, {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '',
  })
}

// TODO: alow controlling variables type
function clientGraphqlRequest<T>(query: string, params: Variables) {
  return request<T>(process.env.NEXT_PUBLIC_API_ENDPOINT || '', query, params, {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || '',
  })
}

export { graphqlRequest, clientGraphqlRequest }
