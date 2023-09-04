import Head from 'next/head'
import MoreBook from 'components/book/MoreBookList/MoreBook'

export default async function HomePage() {
  return (
    <>
      <Head>
        <title>Book Market - Home page</title>
        <meta name="description" content="a page to seek old books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* @ts-expect-error Server Component*/}
        <MoreBook />
      </main>
    </>
  )
}
