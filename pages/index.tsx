import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import BookCard from '../components/BookCard'
import { Button } from 'semantic-ui-react'

export default function Home() {
  const renderBookCard = () => {
    return Array(10)
      .fill('books')
      .map((_, index) => (
        <BookCard
          key={index}
          address={`Quan ${index}`}
          title={`Name of book ${index}`}
          price={14000 + index * 10}
          bookImg="https://m.media-amazon.com/images/I/41kuZT-RuGL._AC_UL480_FMwebp_QL65_.jpg"
        />
      ))
  }
  return (
    <>
      <Head>
        <title>Book Market</title>
        <meta name="description" content="a page to seek old books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div> This is home page </div>
    </>

      <div className={styles['grid']}>{renderBookCard()}</div>

      <Button size="big" color="green">
        More product
      </Button>

    </div>
  )
}
