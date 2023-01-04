import { Image } from 'semantic-ui-react'
import styles from '../../styles/BookCard.module.scss'

interface Props {
  bookImg: String
  title: String
  address: String
  price: number
}

const BookCard = ({ bookImg, title, address, price }: Props) => {
  return (
    <div className={styles['book-card']}>
      <Image alt="book-id" src={bookImg} />
      <div className={styles['address']}>{address}</div>
      <div className={styles['title']}>{title}</div>
      <div className={styles['price']}>{price} đ</div>
    </div>
  )
}

export default BookCard
