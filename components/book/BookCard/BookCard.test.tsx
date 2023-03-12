import { render, screen } from '@testing-library/react'
import { book1 as book } from 'test-utils/__mocks__/mockedBooks'
import BookCard from './BookCard'

describe('BookCard', () => {
  it('renders an image, district, title and price', () => {
    const { container } = render(<BookCard book={book} />)

    const image = container.querySelector('img')
    const district = screen.getByText('Quan 1')
    const title = screen.getByText('Book 1')
    const price = screen.getByText('30.000 ₫')

    expect(image?.src).toContain(book.pictures[0].split('//')[1])
    expect(district).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(price).toBeInTheDocument()
  })
})
