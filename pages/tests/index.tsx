import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useState } from 'react'
import { SWRConfig } from 'swr'
import {
  useTests,
  fetchTests,
  DEFAULT_TESTS_LIMIT,
  Test,
  clientFetchTests,
} from '../../hooks/useTests'

// This gets called on every request
export const getServerSideProps: GetServerSideProps<{
  fallback: { tests: { tests: Array<Test> } }
}> = async () => {
  // Fetch data from external API
  const data = await fetchTests()

  // Pass data to the page via props
  return { props: { fallback: { tests: data } } }
}

function Tests() {
  const [limit, setLimit] = useState(DEFAULT_TESTS_LIMIT)
  const { data, isValidating, mutate } = useTests(limit)
  const onClickMoreProduct = async () => {
    const tests = await clientFetchTests(limit * 2)
    mutate(tests)
    setLimit(limit * 2)
  }

  if (isValidating || !data) return <div>Loading...</div>

  return (
    <>
      <h2>This data is fetch from server side</h2>
      <ul>
        {data.tests.map((test) => (
          <li key={test.id}>{test.name}</li>
        ))}
      </ul>
      <button onClick={onClickMoreProduct}>more product</button>
    </>
  )
}

export default function Page({
  fallback,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <SWRConfig
      value={{
        fallback,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <Tests />
    </SWRConfig>
  )
}
