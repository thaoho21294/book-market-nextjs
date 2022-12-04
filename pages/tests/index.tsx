import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'
import { clientFetchTests, DEFAULT_TESTS_LIMIT } from '../../hooks/useTests'

function Tests({
  isError,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [limit, setLimit] = useState(DEFAULT_TESTS_LIMIT)

  const { data, isLoading } = useQuery(['tests', limit], () =>
    clientFetchTests(limit)
  )

  const onClickMoreProduct = () => {
    setLimit(limit + 1)
  }

  if (isError) return <>Error page</>

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

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  let isError = false
  try {
    // prefetch data on the server
    await queryClient.fetchQuery(['tests', DEFAULT_TESTS_LIMIT], () =>
      clientFetchTests(DEFAULT_TESTS_LIMIT)
    )
  } catch (err) {
    isError = true
  }

  return {
    props: {
      isError,
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Tests
