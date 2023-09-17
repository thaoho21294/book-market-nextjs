import MoreBookList from './MoreBookList'
import MoreBookButton from './MoreButton'

export default async function MoreBook({
  genreId,
}: {
  genreId?: string | string[]
}) {
  return (
    <>
      {/* @ts-expect-error Server Component*/}
      <MoreBookList genreId={genreId} />
      <MoreBookButton />
    </>
  )
}
