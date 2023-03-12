import { render, screen } from '@testing-library/react'
import { books } from 'test-utils/__mocks__/mockedBooks'
import BookList from './BookList'

describe('Home', () => {
  it('renders 2 books', () => {
    render(<BookList books={books} />)

    const book1 = screen.getByText('Book 1')
    const book2 = screen.getByText('Book 2')

    expect(book1).toBeInTheDocument()
    expect(book2).toBeInTheDocument()
  })
})
