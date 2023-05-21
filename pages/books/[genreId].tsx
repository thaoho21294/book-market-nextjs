import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

import { DEFAULT_BOOKS_LIMIT, fetchBooks } from 'hooks/useBooks'
import { MoreBookList } from 'components/book/MoreBookList'

export default function BookListByGenre({
  isError,
  genreId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Book Market - {genreId}</title>
      </Head>
      <MoreBookList isError={isError} genreId={genreId} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const genreId = params?.genreId
  const queryClient = new QueryClient()

  let isError = false
  try {
    // prefetch data on the server
    await queryClient.fetchQuery(['books', DEFAULT_BOOKS_LIMIT, genreId], () =>
      fetchBooks(DEFAULT_BOOKS_LIMIT, genreId)
    )
  } catch (err) {
    isError = true
  }

  return {
    props: {
      genreId,
      isError,
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient),
    },
  }
}
