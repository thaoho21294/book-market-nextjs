import { fireEvent, screen } from '@testing-library/react'

import { clientGraphqlRequest } from 'lib/harsura'
import { Book } from 'types'
import { books, book3, book2 } from 'test-utils/__mocks__/mockedBooks'
import { renderWithQueryClient } from 'test-utils/setup'
import { waitForLoadingToBeDone } from 'test-utils/common'

import MoreBook from './MoreBook'

const mockedRequest = clientGraphqlRequest as unknown as jest.Mock<
  Promise<{ books: Book[] }>,
  [string, { genreIds: [string] }]
>

// TODO: fix this test when react testing support server component
describe.skip('MoreBookList', () => {
  afterEach(() => {
    mockedRequest.mockReset()
  })

  it('should render book list and more button', async () => {
    mockedRequest.mockReturnValueOnce(Promise.resolve({ books }))

    // @ts-ignore: Unreachable code error
    renderWithQueryClient(<MoreBook />)
    await waitForLoadingToBeDone()

    const book1Elm = screen.getByText('Book 1')
    const book2Elm = screen.getByText('Book 2')
    expect(book1Elm).toBeInTheDocument()
    expect(book2Elm).toBeInTheDocument()
  })

  it('should able to render book list by genre', async () => {
    mockedRequest.mockImplementation((_query, { genreIds }) => {
      if (genreIds.toString() === 'genre-2')
        return Promise.resolve({ books: [book2] })
      return Promise.resolve({ books })
    })

    // @ts-ignore: Unreachable code error
    renderWithQueryClient(<MoreBook genreId="genre-2" />)
    await waitForLoadingToBeDone()

    const book1Elm = screen.queryByText('Book 1')
    const book2Elm = screen.getByText('Book 2')
    expect(book1Elm).toBeNull()
    expect(book2Elm).toBeInTheDocument()
  })

  it('click "More Books" should display more books', async () => {
    jest.mock('hooks/useBooks', () => {
      return {
        ...jest.requireActual('hooks/useBooks'),
        DEFAULT_BOOKS_LIMIT: 2,
      }
    })
    mockedRequest
      .mockReturnValueOnce(Promise.resolve({ books }))
      .mockResolvedValueOnce(Promise.resolve({ books: [...books, book3] }))

    // @ts-ignore: Unreachable code error
    renderWithQueryClient(<MoreBook />)
    await waitForLoadingToBeDone()

    const book1Elm = screen.getByText('Book 1')
    const book2Elm = screen.getByText('Book 2')
    expect(book1Elm).toBeInTheDocument()
    expect(book2Elm).toBeInTheDocument()

    fireEvent.click(screen.getByText('More Books', { selector: 'button' }))

    await waitForLoadingToBeDone()

    const book3Elm = screen.getByText('Book 3')
    expect(book3Elm).toBeInTheDocument()

    jest.resetAllMocks()
  })
})
