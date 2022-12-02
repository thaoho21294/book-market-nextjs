import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useState } from 'react'
import { fetchTests, DEFAULT_TESTS_LIMIT } from '../../lib/hasura/fetchTests'

interface Test {
  id: number
  name: string
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps<{
  tests: Array<Test>
}> = async () => {
  // Fetch data from external API
  const data = await fetchTests()

  // Pass data to the page via props
  return { props: { tests: data.tests } }
}

function Tests({
  tests,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [limit, setLimit] = useState(DEFAULT_TESTS_LIMIT)
  const [localTests, setLocalTest] = useState(tests)

  const onClickMoreProduct = () => {
    const newLimit = limit * 2
    setLimit(newLimit)
    fetchTests(newLimit).then((data) => {
      setLocalTest(data.tests)
    })
  }

  return (
    <>
      <h2>This data is fetch from server side</h2>
      <ul>
        {localTests.map((test) => (
          <li key={test.id}>{test.name}</li>
        ))}
      </ul>
      <button onClick={onClickMoreProduct}>more product</button>
    </>
  )
}

export default Tests
