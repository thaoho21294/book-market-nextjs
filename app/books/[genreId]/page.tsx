import Head from 'next/head'
import { MoreBook } from 'components/book/MoreBookList'

export default async function BookListByGenre({
  params,
}: {
  params: { genreId: string }
}) {
  const genreId = params.genreId

  return (
    <>
      <Head>
        <title>Book Market - {genreId}</title>
      </Head>
      {/* @ts-expect-error Server Component */}
      <MoreBook genreId={genreId} />
    </>
  )
}
