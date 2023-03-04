import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Book } from 'types'
import { formatPrice } from 'utils/formatPrice'

import styles from './BookCard.module.scss'

const BookCard = ({ book }: { book: Book; eager: boolean }) => {
  const {
    title,
    user: {
      district: { name: districtName },
    },
    price,
    pictures: [firstPicture],
  } = book

  return (
    <Link
      className={styles.bookCard}
      href="#"
      aria-label={`View ${title} book page`}
    >
      <div className={styles.image} data-name="book-image-box">
        <Image alt={title} width="224" height="224" src={firstPicture} />
      </div>
      <div className={styles.details}>
        <div className={styles.district}>{districtName}</div>
        <h2 className={styles.heading}>{title}</h2>
        <div className={styles.price}>{formatPrice(price)}</div>
      </div>
    </Link>
  )
}

export default BookCard
