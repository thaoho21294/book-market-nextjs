import Head from 'next/head'
import Image from 'next/image'
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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['grid']}>{renderBookCard()}</div>

      <Button size="big" color="green">
        More product
      </Button>
 
    </div>
  )
}
