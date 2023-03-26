import { Book } from 'types'

export const book1: Book = {
  id: 1,
  title: 'Book 1',
  author: 'Nam',
  price: 30000,
  originalPrice: 50000,
  description: 'This is book 1',
  pictures: ['https://link-to-image-1'],
  isSold: false,
  genre: {
    id: 'genre-1',
    name: 'Tam ly',
  },
  user: {
    id: 'user-1',
    email: 'user1@gmail.com',
    district: {
      id: 'district-1',
      name: 'Quan 1',
    },
  },
}

export const book2: Book = {
  id: 2,
  title: 'Book 2',
  author: 'Nam',
  price: 30000,
  originalPrice: 50000,
  description: 'This is book 2',
  pictures: ['https://link-to-image-2'],
  isSold: false,
  genre: {
    id: 'genre-1',
    name: 'Tam ly',
  },
  user: {
    id: 'user-1',
    email: 'user1@gmail.com',
    district: {
      id: 'district-2',
      name: 'Quan 2',
    },
  },
}

export const books = [book1, book2]
