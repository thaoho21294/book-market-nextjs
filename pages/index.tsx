import Head from 'next/head'
import { BookList } from '../components/book'
export default function Home() {
  return (
    <>
      <Head>
        <title>Book Market</title>
        <meta name="description" content="a page to seek old books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <BookList></BookList>
      </div>
    </>
  )
}
