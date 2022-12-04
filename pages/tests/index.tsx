import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { clientFetchTests, DEFAULT_TESTS_LIMIT } from '../../hooks/useTests'

function Tests() {
  const [limit, setLimit] = useState(DEFAULT_TESTS_LIMIT)

  const { data, isLoading } = useQuery(['tests', limit], () =>
    clientFetchTests(limit)
  )

  const onClickMoreProduct = () => {
    setLimit(limit + 1)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <h2>This data is fetch from server side</h2>
      <ul>
        {data?.tests.map((test) => (
          <li key={test.id}>{test.name}</li>
        ))}
      </ul>
      <button onClick={onClickMoreProduct}>more product</button>
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['tests', DEFAULT_TESTS_LIMIT], () =>
    clientFetchTests(DEFAULT_TESTS_LIMIT)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Tests
