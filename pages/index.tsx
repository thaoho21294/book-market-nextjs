import Head from 'next/head'
import { BookList } from '../components/book'
import { useBooks } from '../hooks/useBooks'

export default function Home() {
  const { data, isLoading } = useBooks()

  return (
    <>
      <Head>
        <title>Book Market</title>
        <meta name="description" content="a page to seek old books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isLoading && <p>Loading</p>}
        {!isLoading && data && <BookList books={data.books} />}
      </main>
    </>
  )
}
