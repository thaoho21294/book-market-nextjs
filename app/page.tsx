import Head from 'next/head'
// import { MoreBookList } from 'components/book/MoreBookList'

export default async function Home() {
  return (
    <>
      <Head>
        <title>Book Market - Home page</title>
        <meta name="description" content="a page to seek old books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hi there</main>
    </>
  )
}
