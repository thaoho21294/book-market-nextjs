import Head from 'next/head'
import { MoreBookList } from 'components/book/MoreBookList'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { DEFAULT_BOOKS_LIMIT, fetchBooks } from 'hooks/useBooks'

export default function Home({
  isError,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Book Market - Home page</title>
        <meta name="description" content="a page to seek old books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MoreBookList isError={isError} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  let isError = false
  try {
    // prefetch data on the server
    await queryClient.fetchQuery(['books', DEFAULT_BOOKS_LIMIT], () =>
      fetchBooks(DEFAULT_BOOKS_LIMIT)
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
